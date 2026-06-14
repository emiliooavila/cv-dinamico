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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonalData({ profileImage: reader.result });
      };
      reader.readAsDataURL(file);
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

    const urlRegex = /^(https?:\/\/)?([\w\d\-_]+\.+[A-Za-z]{2,})+\/?/;
    if (personalData.profileImage && personalData.profileImage.startsWith('http') && !urlRegex.test(personalData.profileImage)) {
      newErrors.profileImage = "La URL de la imagen no es válida.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Datos personales guardados correctamente.");
    }
  };

  return (
    <section className="glass-panel" style={{ padding: '40px', margin: '30px auto', maxWidth: '800px', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '25px', color: 'var(--text-h)', fontWeight: '800' }}>Datos Personales</h2>
      
      <form onSubmit={validateForm}>
        <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '25px', flexWrap: 'wrap' }}>
          {personalData.profileImage ? (
            <img 
              src={personalData.profileImage} 
              alt="Perfil" 
              style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
            />
          ) : (
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '2rem', opacity: '0.3' }}>📷</span>
            </div>
          )}
          <div style={{ flex: '1', minWidth: '250px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Foto de Perfil (Archivo): </label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload}
              className="glass-input"
              style={{ padding: '10px' }}
            />
            <label style={{ display: 'block', marginTop: '15px', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>O URL de la imagen: </label>
            <input 
              type="text" 
              name="profileImage" 
              value={personalData.profileImage.startsWith('data:image') ? '' : personalData.profileImage} 
              onChange={handleChange} 
              placeholder="https://..."
              className="glass-input"
            />
            {errors.profileImage && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.profileImage}</p>}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Nombre Completo: </label>
          <input 
            type="text" 
            name="fullName" 
            value={personalData.fullName} 
            onChange={handleChange} 
            className="glass-input"
            placeholder="Ej. Juan Pérez"
          />
          {errors.fullName && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.fullName}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Profesión / Especialidad: </label>
          <input 
            type="text" 
            name="profession" 
            value={personalData.profession} 
            onChange={handleChange} 
            className="glass-input"
            placeholder="Ej. Desarrollador Web Full-Stack"
          />
          {errors.profession && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.profession}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Correo Electrónico: </label>
          <input 
            type="email" 
            name="email" 
            value={personalData.email} 
            onChange={handleChange} 
            className="glass-input"
            placeholder="correo@ejemplo.com"
          />
          {errors.email && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.email}</p>}
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Ciudad / Ubicación: </label>
            <input 
              type="text" 
              name="location" 
              value={personalData.location} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ciudad, País"
            />
          </div>

          <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Teléfono: </label>
            <input 
              type="tel" 
              name="phone" 
              value={personalData.phone} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="+00 123 456 7890"
            />
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Descripción / Perfil Profesional: </label>
          <textarea 
            name="description" 
            value={personalData.description} 
            onChange={handleChange} 
            rows="5"
            className="glass-input"
            style={{ resize: 'vertical' }}
            placeholder="Escribe un breve resumen de tu experiencia y objetivos..."
          />
        </div>

        <button type="submit" className="glass-button">Validar y Guardar</button>
      </form>
    </section>
  );
}