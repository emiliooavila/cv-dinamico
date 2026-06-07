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
    <section style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
      <h2>Educación, Cursos y Certificaciones</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Institución: </label>
          <input 
            type="text" 
            name="institution" 
            value={educationInput.institution} 
            onChange={handleChange} 
          />
          {errors.institution && <p style={{ color: 'red', margin: 0 }}>{errors.institution}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Nombre del Programa o Curso: </label>
          <input 
            type="text" 
            name="program" 
            value={educationInput.program} 
            onChange={handleChange} 
          />
          {errors.program && <p style={{ color: 'red', margin: 0 }}>{errors.program}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Periodo o Año: </label>
          <input 
            type="text" 
            name="period" 
            value={educationInput.period} 
            onChange={handleChange} 
            placeholder="Ej. 2023 - Presente"
          />
          {errors.period && <p style={{ color: 'red', margin: 0 }}>{errors.period}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Enlace de Evidencia (Opcional): </label>
          <input 
            type="text" 
            name="evidenceUrl" 
            value={educationInput.evidenceUrl} 
            onChange={handleChange} 
          />
          {errors.evidenceUrl && <p style={{ color: 'red', margin: 0 }}>{errors.evidenceUrl}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Descripción breve: </label>
          <textarea 
            name="description" 
            value={educationInput.description} 
            onChange={handleChange} 
            rows="2"
            style={{ width: '100%', resize: 'vertical' }}
          />
        </div>

        <button type="submit">Agregar Educación</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>Educación Agregada ({education.length})</h3>
        {education.length === 0 ? (
          <p>Aún no has agregado educación.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {education.map((item) => (
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
                  <strong>{item.program}</strong> en {item.institution}
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>Periodo: {item.period}</p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>{item.description}</p>
                </div>
                <button 
                  onClick={() => deleteItem('education', item.id)}
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