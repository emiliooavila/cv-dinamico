import { useState } from 'react';
import { useCV } from '../context/CVContext';

export default function PersonalForm() {
  const { cvData, updatePersonalData } = useCV();
  const { personalData } = cvData;

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    updatePersonalData({ [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!personalData.fullName.trim()) newErrors.fullName = "El nombre es obligatorio.";
    if (!personalData.profession.trim()) newErrors.profession = "La profesión es obligatoria.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!personalData.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!emailRegex.test(personalData.email)) {
      newErrors.email = "El formato del correo no es válido.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Datos personales guardados correctamente.");
    }
  };

  return (
    <section style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
      <h2>Datos Personales</h2>
      
      <form onSubmit={validateForm}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre Completo: </label>
          <input 
            type="text" 
            name="fullName" 
            value={personalData.fullName} 
            onChange={handleChange} 
          />
          {errors.fullName && <p style={{ color: 'red', margin: 0 }}>{errors.fullName}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Profesión / Especialidad: </label>
          <input 
            type="text" 
            name="profession" 
            value={personalData.profession} 
            onChange={handleChange} 
          />
          {errors.profession && <p style={{ color: 'red', margin: 0 }}>{errors.profession}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Correo Electrónico: </label>
          <input 
            type="email" 
            name="email" 
            value={personalData.email} 
            onChange={handleChange} 
          />
          {errors.email && <p style={{ color: 'red', margin: 0 }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Ciudad / Ubicación: </label>
          <input 
            type="text" 
            name="location" 
            value={personalData.location} 
            onChange={handleChange} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Teléfono: </label>
          <input 
            type="tel" 
            name="phone" 
            value={personalData.phone} 
            onChange={handleChange} 
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Descripción / Perfil Profesional: </label>
          <textarea 
            name="description" 
            value={personalData.description} 
            onChange={handleChange} 
            rows="4"
            style={{ width: '100%', resize: 'vertical' }}
          />
        </div>

        <button type="submit">Validar y Guardar</button>
      </form>
    </section>
  );
}