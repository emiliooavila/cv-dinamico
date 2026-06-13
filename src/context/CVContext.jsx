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

const mockCVData = {
  personalData: {
    fullName: 'Diego Armando Pérez',
    profession: 'Desarrollador Full Stack',
    location: 'Guadalajara, Jalisco, México',
    email: 'diego.perez@example.com',
    phone: '+52 33 1234 5678',
    description: 'Desarrollador de software apasionado por construir aplicaciones web eficientes, escalables y con un diseño de interfaz de alta calidad. Especializado en el ecosistema JavaScript/TypeScript, con amplia experiencia utilizando React, Node.js y bases de datos relacionales y no relacionales. Comprometido con las buenas prácticas de desarrollo, el trabajo en equipo y la mejora continua.',
    profileImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    links: [
      { label: 'GitHub', url: 'https://github.com/diego-developer' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/diego-perez-dev' },
      { label: 'Portafolio', url: 'https://diego-perez.dev' }
    ]
  },
  skills: [
    { id: '1', name: 'React', category: 'Programación', level: 'Avanzado', description: 'Desarrollo de SPAs, hooks personalizados y gestión de estado con Context API.' },
    { id: '2', name: 'Node.js & Express', category: 'Programación', level: 'Intermedio', description: 'Creación de REST APIs seguras, middleware de validación e integraciones.' },
    { id: '3', name: 'PostgreSQL', category: 'Bases de datos', level: 'Intermedio', description: 'Diseño de esquemas relacionales, consultas optimizadas y triggers.' },
    { id: '4', name: 'CSS Grid & Flexbox', category: 'Diseño web', level: 'Avanzado', description: 'Maquetación responsiva, animaciones fluidas y sistemas de diseño.' },
    { id: '5', name: 'Git & GitHub', category: 'Herramientas', level: 'Avanzado', description: 'Manejo de ramas, resolución de conflictos y flujos de trabajo colaborativos.' }
  ],
  projects: [
    { id: '1', name: 'E-Commerce Platform', description: 'Tienda en línea completa con pasarela de pago simulada, carrito de compras reactivo y panel de administración para productos.', technologies: 'React, Node.js, Express, PostgreSQL', repoUrl: 'https://github.com/diego-developer/ecommerce-shop', deployUrl: 'https://ecommerce-shop-demo.vercel.app' },
    { id: '2', name: 'Task Manager API', description: 'API REST para gestión de tareas de equipos con autenticación JWT, roles de usuario y notificaciones en tiempo real.', technologies: 'Node.js, Express, MongoDB, Socket.io', repoUrl: 'https://github.com/diego-developer/task-manager-api', deployUrl: 'https://task-manager-api.onrender.com' }
  ],
  education: [
    { id: '1', institution: 'Universidad de Guadalajara', program: 'Ingeniería en Sistemas Computacionales', period: '2022 - Presente', description: 'Estudiante de sexto semestre enfocado en ingeniería de software, arquitectura de sistemas y bases de datos.', evidenceUrl: 'https://udg.mx' },
    { id: '2', institution: 'Udemy Academic', program: 'Master en React, Hooks y Redux', period: '2025', description: 'Curso de especialización práctica en el ecosistema React, patrones avanzados de componentes y testing.', evidenceUrl: 'https://udemy.com' }
  ],
  experience: [
    { id: '1', role: 'Desarrollador Web Frontend (Prácticas)', company: 'Tech Solutions MX', period: 'Enero 2026 - Presente', description: 'Colaboración en el rediseño del portal interno de clientes, implementando componentes reactivos de alto rendimiento y optimizando los tiempos de carga en un 25%.', technologies: 'React, Vite, CSS Modules, Git' }
  ]
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

  const loadMockData = () => {
    setCvData(mockCVData);
  };

  return (
    <CVContext.Provider value={{ 
      cvData, 
      updatePersonalData, 
      addItem, 
      updateItem, 
      deleteItem,
      resetCV,
      loadMockData
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