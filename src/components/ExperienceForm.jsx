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
    <section className="glass-panel" style={{ padding: '40px', margin: '30px auto', maxWidth: '800px', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '25px', color: 'var(--text-h)', fontWeight: '800' }}>Experiencia Profesional</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Nombre del Puesto o Actividad: </label>
            <input 
              type="text" 
              name="role" 
              value={experienceInput.role} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. Desarrollador Frontend Junior"
            />
            {errors.role && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.role}</p>}
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Institución, Empresa o Proyecto: </label>
            <input 
              type="text" 
              name="company" 
              value={experienceInput.company} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. Empresa Tech SA de CV"
            />
            {errors.company && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.company}</p>}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Periodo: </label>
            <input 
              type="text" 
              name="period" 
              value={experienceInput.period} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. Enero 2026 - Junio 2026"
            />
            {errors.period && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.period}</p>}
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Tecnologías, Herramientas o Habilidades: </label>
            <input 
              type="text" 
              name="technologies" 
              value={experienceInput.technologies} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. React, Node.js, Git..."
            />
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Descripción de actividades realizadas: </label>
          <textarea 
            name="description" 
            value={experienceInput.description} 
            onChange={handleChange} 
            rows="3"
            className="glass-input"
            style={{ resize: 'vertical' }}
            placeholder="Describe tus responsabilidades y logros principales..."
          />
        </div>

        <button type="submit" className="glass-button">Agregar Experiencia</button>
      </form>

      <div style={{ marginTop: '35px' }}>
        <h3 style={{ color: 'var(--text-h)', marginBottom: '20px', fontSize: '1.2rem', fontWeight: '700' }}>
          Experiencia Agregada ({experience.length})
        </h3>
        {experience.length === 0 ? (
          <p style={{ color: 'var(--text)', fontStyle: 'italic' }}>Aún no has agregado experiencia.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {experience.map((item) => (
              <li 
                key={item.id} 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '16px 20px', 
                  marginBottom: '12px', 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}
              >
                <div>
                  <strong style={{ color: 'var(--text-h)', fontSize: '1.05rem' }}>{item.role}</strong> <span style={{ color: 'var(--text)' }}>en {item.company}</span>
                  <p style={{ margin: '5px 0', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>Periodo: {item.period}</p>
                  {item.technologies && (
                    <p style={{ margin: '5px 0', fontSize: '0.9rem', color: 'var(--text)' }}><strong style={{ color: 'var(--text-h)' }}>Tecnologías:</strong> {item.technologies}</p>
                  )}
                  {item.description && (
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.4' }}>{item.description}</p>
                  )}
                </div>
                <button 
                  onClick={() => deleteItem('experience', item.id)}
                  style={{ 
                    backgroundColor: 'rgba(255, 77, 79, 0.1)', 
                    color: '#ff4d4f', 
                    border: '1px solid rgba(255, 77, 79, 0.3)', 
                    padding: '8px 16px', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                    marginLeft: '15px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff4d4f';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 77, 79, 0.1)';
                    e.currentTarget.style.color = '#ff4d4f';
                  }}
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