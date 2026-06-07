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
    <section style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
      <h2>Habilidades</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre de la Habilidad: </label>
          <input 
            type="text" 
            name="name" 
            value={skillInput.name} 
            onChange={handleChange} 
          />
          {errors.name && <p style={{ color: 'red', margin: 0 }}>{errors.name}</p>}
          {errors.duplicate && <p style={{ color: 'red', margin: 0 }}>{errors.duplicate}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Categoría: </label>
          <input 
            type="text" 
            name="category" 
            value={skillInput.category} 
            onChange={handleChange} 
            placeholder="Ej. Programación, Diseño..."
          />
          {errors.category && <p style={{ color: 'red', margin: 0 }}>{errors.category}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Nivel de Dominio: </label>
          <select 
            name="level" 
            value={skillInput.level} 
            onChange={handleChange}
          >
            <option value="">Selecciona un nivel</option>
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
          {errors.level && <p style={{ color: 'red', margin: 0 }}>{errors.level}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Descripción breve: </label>
          <textarea 
            name="description" 
            value={skillInput.description} 
            onChange={handleChange} 
            rows="2"
            style={{ width: '100%', resize: 'vertical' }}
          />
        </div>

        <button type="submit">Agregar Habilidad</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>Habilidades Agregadas ({skills.length})</h3>
        {skills.length === 0 ? (
          <p>Aún no has agregado habilidades.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {skills.map((skill) => (
              <li 
                key={skill.id} 
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
                  <strong>{skill.name}</strong> ({skill.category}) - {skill.level}
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>{skill.description}</p>
                </div>
                <button 
                  onClick={() => deleteItem('skills', skill.id)}
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