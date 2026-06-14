import { useState } from 'react';
import { useCV } from '../context/CVContext';

export default function SkillForm() {
  const { cvData, addItem, deleteItem } = useCV();
  const { skills } = cvData;

  const [skillInput, setSkillInput] = useState({
    name: '',
    category: '',
    level: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setSkillInput({ ...skillInput, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
    if (errors.duplicate) {
      setErrors({ ...errors, duplicate: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!skillInput.name.trim()) newErrors.name = "El nombre de la habilidad es obligatorio.";
    if (!skillInput.category.trim()) newErrors.category = "La categoría es obligatoria.";
    if (!skillInput.level.trim()) newErrors.level = "El nivel de dominio es obligatorio.";

    const isDuplicate = skills.some(
      skill => skill.name.toLowerCase() === skillInput.name.trim().toLowerCase()
    );

    if (isDuplicate) {
      newErrors.duplicate = "Esta habilidad ya ha sido agregada.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addItem('skills', skillInput);
      setSkillInput({ name: '', category: '', level: '', description: '' });
    }
  };

  return (
    <section className="glass-panel" style={{ padding: '40px', margin: '30px auto', maxWidth: '800px', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '25px', color: 'var(--text-h)', fontWeight: '800' }}>Habilidades</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Nombre de la Habilidad: </label>
            <input 
              type="text" 
              name="name" 
              value={skillInput.name} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. React, SQL, Diseño UX..."
            />
            {errors.name && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.name}</p>}
            {errors.duplicate && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.duplicate}</p>}
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Categoría: </label>
            <input 
              type="text" 
              name="category" 
              value={skillInput.category} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. Programación, Diseño..."
            />
            {errors.category && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.category}</p>}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Nivel de Dominio: </label>
          <select 
            name="level" 
            value={skillInput.level} 
            onChange={handleChange}
            className="glass-input"
            style={{ cursor: 'pointer' }}
          >
            <option value="" style={{ color: 'black' }}>Selecciona un nivel</option>
            <option value="Básico" style={{ color: 'black' }}>Básico</option>
            <option value="Intermedio" style={{ color: 'black' }}>Intermedio</option>
            <option value="Avanzado" style={{ color: 'black' }}>Avanzado</option>
          </select>
          {errors.level && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.level}</p>}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Descripción breve: </label>
          <textarea 
            name="description" 
            value={skillInput.description} 
            onChange={handleChange} 
            rows="2"
            className="glass-input"
            style={{ resize: 'vertical' }}
            placeholder="Añade detalles sobre tu experiencia con esta habilidad..."
          />
        </div>

        <button type="submit" className="glass-button">Agregar Habilidad</button>
      </form>

      <div style={{ marginTop: '35px' }}>
        <h3 style={{ color: 'var(--text-h)', marginBottom: '20px', fontSize: '1.2rem', fontWeight: '700' }}>
          Habilidades Agregadas ({skills.length})
        </h3>
        {skills.length === 0 ? (
          <p style={{ color: 'var(--text)', fontStyle: 'italic' }}>Aún no has agregado habilidades.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {skills.map((skill) => (
              <li 
                key={skill.id} 
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
                  <strong style={{ color: 'var(--text-h)', fontSize: '1.05rem' }}>{skill.name}</strong> 
                  <span style={{ color: 'var(--accent)', marginLeft: '8px', fontSize: '0.9rem', fontWeight: '600' }}>({skill.category})</span> 
                  <span style={{ color: 'var(--text)', marginLeft: '8px', fontSize: '0.9rem' }}>- {skill.level}</span>
                  {skill.description && (
                    <p style={{ margin: '8px 0 0 0', fontSize: '0.85rem', color: 'var(--text)', lineHeight: '1.4' }}>{skill.description}</p>
                  )}
                </div>
                <button 
                  onClick={() => deleteItem('skills', skill.id)}
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