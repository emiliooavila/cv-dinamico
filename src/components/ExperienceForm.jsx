import { useState } from 'react';
import { useCV } from '../context/CVContext';

export default function ExperienceForm() {
  const { cvData, addItem, deleteItem } = useCV();
  const { experience } = cvData;

  const [experienceInput, setExperienceInput] = useState({
    role: '',
    company: '',
    period: '',
    description: '',
    technologies: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setExperienceInput({ ...experienceInput, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!experienceInput.role.trim()) newErrors.role = "El puesto o actividad es obligatorio.";
    if (!experienceInput.company.trim()) newErrors.company = "La institución o empresa es obligatoria.";
    if (!experienceInput.period.trim()) newErrors.period = "El periodo es obligatorio.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addItem('experience', experienceInput);
      setExperienceInput({ role: '', company: '', period: '', description: '', technologies: '' });
    }
  };

  return (
    <section style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
      <h2>Experiencia Profesional</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre del Puesto o Actividad: </label>
          <input 
            type="text" 
            name="role" 
            value={experienceInput.role} 
            onChange={handleChange} 
          />
          {errors.role && <p style={{ color: 'red', margin: 0 }}>{errors.role}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Institución, Empresa o Proyecto: </label>
          <input 
            type="text" 
            name="company" 
            value={experienceInput.company} 
            onChange={handleChange} 
          />
          {errors.company && <p style={{ color: 'red', margin: 0 }}>{errors.company}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Periodo: </label>
          <input 
            type="text" 
            name="period" 
            value={experienceInput.period} 
            onChange={handleChange} 
            placeholder="Ej. Enero 2026 - Junio 2026"
          />
          {errors.period && <p style={{ color: 'red', margin: 0 }}>{errors.period}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Tecnologías, Herramientas o Habilidades: </label>
          <input 
            type="text" 
            name="technologies" 
            value={experienceInput.technologies} 
            onChange={handleChange} 
            placeholder="Ej. React, Node.js, Git..."
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Descripción de actividades realizadas: </label>
          <textarea 
            name="description" 
            value={experienceInput.description} 
            onChange={handleChange} 
            rows="3"
            style={{ width: '100%', resize: 'vertical' }}
          />
        </div>

        <button type="submit">Agregar Experiencia</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>Experiencia Agregada ({experience.length})</h3>
        {experience.length === 0 ? (
          <p>Aún no has agregado experiencia.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {experience.map((item) => (
              <li 
                key={item.id} 
                style={{ 
                  border: '1px solid #eee', 
                  padding: '10px', 
                  marginBottom: '10px', 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <strong>{item.role}</strong> en {item.company}
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>Periodo: {item.period}</p>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>Tecnologías:</strong> {item.technologies}</p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>{item.description}</p>
                </div>
                <button 
                  onClick={() => deleteItem('experience', item.id)}
                  style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}