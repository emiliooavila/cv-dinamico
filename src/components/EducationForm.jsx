import { useState } from 'react';
import { useCV } from '../context/CVContext';

export default function EducationForm() {
  const { cvData, addItem, deleteItem } = useCV();
  const { education } = cvData;

  const [educationInput, setEducationInput] = useState({
    institution: '',
    program: '',
    period: '',
    description: '',
    evidenceUrl: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setEducationInput({ ...educationInput, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!educationInput.institution.trim()) newErrors.institution = "La institución es obligatoria.";
    if (!educationInput.program.trim()) newErrors.program = "El programa o curso es obligatorio.";
    if (!educationInput.period.trim()) newErrors.period = "El periodo es obligatorio.";

    const urlRegex = /^(https?:\/\/)?([\w\d\-_]+\.+[A-Za-z]{2,})+\/?/;
    
    if (educationInput.evidenceUrl.trim() && !urlRegex.test(educationInput.evidenceUrl)) {
      newErrors.evidenceUrl = "El enlace de evidencia no es válido.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addItem('education', educationInput);
      setEducationInput({ institution: '', program: '', period: '', description: '', evidenceUrl: '' });
    }
  };

  return (
    <section className="glass-panel" style={{ padding: '40px', margin: '30px auto', maxWidth: '800px', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '25px', color: 'var(--text-h)', fontWeight: '800' }}>Educación, Cursos y Certificaciones</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Institución: </label>
            <input 
              type="text" 
              name="institution" 
              value={educationInput.institution} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. Universidad Nacional"
            />
            {errors.institution && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.institution}</p>}
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Nombre del Programa o Curso: </label>
            <input 
              type="text" 
              name="program" 
              value={educationInput.program} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. Ingeniería en Sistemas"
            />
            {errors.program && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.program}</p>}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Periodo o Año: </label>
            <input 
              type="text" 
              name="period" 
              value={educationInput.period} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. 2023 - Presente"
            />
            {errors.period && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.period}</p>}
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Enlace de Evidencia (Opcional): </label>
            <input 
              type="text" 
              name="evidenceUrl" 
              value={educationInput.evidenceUrl} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="https://..."
            />
            {errors.evidenceUrl && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.evidenceUrl}</p>}
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Descripción breve: </label>
          <textarea 
            name="description" 
            value={educationInput.description} 
            onChange={handleChange} 
            rows="2"
            className="glass-input"
            style={{ resize: 'vertical' }}
            placeholder="Agrega información adicional si lo deseas..."
          />
        </div>

        <button type="submit" className="glass-button">Agregar Educación</button>
      </form>

      <div style={{ marginTop: '35px' }}>
        <h3 style={{ color: 'var(--text-h)', marginBottom: '20px', fontSize: '1.2rem', fontWeight: '700' }}>
          Educación Agregada ({education.length})
        </h3>
        {education.length === 0 ? (
          <p style={{ color: 'var(--text)', fontStyle: 'italic' }}>Aún no has agregado educación.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {education.map((item) => (
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
                  <strong style={{ color: 'var(--text-h)', fontSize: '1.05rem' }}>{item.program}</strong> <span style={{ color: 'var(--text)' }}>en {item.institution}</span>
                  <p style={{ margin: '5px 0', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>Periodo: {item.period}</p>
                  {item.description && (
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.4' }}>{item.description}</p>
                  )}
                </div>
                <button 
                  onClick={() => deleteItem('education', item.id)}
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