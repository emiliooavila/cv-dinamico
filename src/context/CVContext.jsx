import React, { createContext, useState, useContext, useEffect } from 'react';

const CVContext = createContext();

const initialCVState = {
  personalData: {
    fullName: '',
    profession: '',
    location: '',
    email: '',
    phone: '',
    description: '',
    profileImage: '',
    links: []
  },
  skills: [],
  projects: [],
  education: [],
  experience: []
};

export const CVProvider = ({ children }) => {
  const [cvData, setCvData] = useState(() => {
    const savedData = localStorage.getItem('devprofile_data');
    return savedData ? JSON.parse(savedData) : initialCVState;
  });

  useEffect(() => {
    localStorage.setItem('devprofile_data', JSON.stringify(cvData));
  }, [cvData]);


  const updatePersonalData = (newData) => {
    setCvData(prev => ({
      ...prev,
      personalData: { ...prev.personalData, ...newData }
    }));
  };

  const addItem = (section, item) => {
    const newItem = {
      ...item,
      id: Date.now().toString()
    };
    setCvData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const updateItem = (section, id, updatedItem) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].map(item => item.id === id ? { ...item, ...updatedItem } : item)
    }));
  };

  const deleteItem = (section, id) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  const resetCV = () => {
    setCvData(initialCVState);
  };

  return (
    <CVContext.Provider value={{ 
      cvData, 
      updatePersonalData, 
      addItem, 
      updateItem, 
      deleteItem,
      resetCV 
    }}>
      {children}
    </CVContext.Provider>
  );
};

export const useCV = () => {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error('useCV debe ser utilizado dentro de un CVProvider');
  }
  return context;
};