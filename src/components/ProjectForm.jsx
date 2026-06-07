import { useState } from 'react';
import { useCV } from '../context/CVContext';

export default function ProjectForm() {
  const { cvData, addItem, deleteItem } = useCV();
  const { projects } = cvData;

  const [projectInput, setProjectInput] = useState({
    name: '',
    description: '',
    technologies: '',
    repoUrl: '',
    deployUrl: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setProjectInput({ ...projectInput, [name]: value });
    
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

    if (!projectInput.name.trim()) newErrors.name = "El nombre del proyecto es obligatorio.";
    if (!projectInput.description.trim()) newErrors.description = "La descripción es obligatoria.";
    if (!projectInput.technologies.trim()) newErrors.technologies = "Las tecnologías son obligatorias.";

    const urlRegex = /^(https?:\/\/)?([\w\d\-_]+\.+[A-Za-z]{2,})+\/?/;
    
    if (projectInput.repoUrl.trim() && !urlRegex.test(projectInput.repoUrl)) {
      newErrors.repoUrl = "El enlace del repositorio no es válido.";
    }
    
    if (projectInput.deployUrl.trim() && !urlRegex.test(projectInput.deployUrl)) {
      newErrors.deployUrl = "El enlace del deploy no es válido.";
    }

    const isDuplicate = projects.some(
      project => project.name.toLowerCase() === projectInput.name.trim().toLowerCase()
    );

    if (isDuplicate) {
      newErrors.duplicate = "Este proyecto ya ha sido agregado.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addItem('projects', projectInput);
      setProjectInput({ name: '', description: '', technologies: '', repoUrl: '', deployUrl: '' });
    }
  };

  return (
    <section style={{ border: '1px solid #ccc', padding: '20px', margin: '20px 0' }}>
      <h2>Proyectos</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre del Proyecto: </label>
          <input 
            type="text" 
            name="name" 
            value={projectInput.name} 
            onChange={handleChange} 
          />
          {errors.name && <p style={{ color: 'red', margin: 0 }}>{errors.name}</p>}
          {errors.duplicate && <p style={{ color: 'red', margin: 0 }}>{errors.duplicate}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Tecnologías utilizadas: </label>
          <input 
            type="text" 
            name="technologies" 
            value={projectInput.technologies} 
            onChange={handleChange} 
          />
          {errors.technologies && <p style={{ color: 'red', margin: 0 }}>{errors.technologies}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Enlace al Repositorio: </label>
          <input 
            type="text" 
            name="repoUrl" 
            value={projectInput.repoUrl} 
            onChange={handleChange} 
          />
          {errors.repoUrl && <p style={{ color: 'red', margin: 0 }}>{errors.repoUrl}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Enlace al Deploy: </label>
          <input 
            type="text" 
            name="deployUrl" 
            value={projectInput.deployUrl} 
            onChange={handleChange} 
          />
          {errors.deployUrl && <p style={{ color: 'red', margin: 0 }}>{errors.deployUrl}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Descripción: </label>
          <textarea 
            name="description" 
            value={projectInput.description} 
            onChange={handleChange} 
            rows="3"
            style={{ width: '100%', resize: 'vertical' }}
          />
          {errors.description && <p style={{ color: 'red', margin: 0 }}>{errors.description}</p>}
        </div>

        <button type="submit">Agregar Proyecto</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>Proyectos Agregados ({projects.length})</h3>
        {projects.length === 0 ? (
          <p>Aún no has agregado proyectos.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {projects.map((project) => (
              <li 
                key={project.id} 
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
                  <strong>{project.name}</strong>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>{project.technologies}</p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>{project.description}</p>
                </div>
                <button 
                  onClick={() => deleteItem('projects', project.id)}
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