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
    <section className="glass-panel" style={{ padding: '40px', margin: '30px auto', maxWidth: '800px', textAlign: 'left' }}>
      <h2 style={{ marginBottom: '25px', color: 'var(--text-h)', fontWeight: '800' }}>Proyectos</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Nombre del Proyecto: </label>
            <input 
              type="text" 
              name="name" 
              value={projectInput.name} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. Sistema de Inventario"
            />
            {errors.name && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.name}</p>}
            {errors.duplicate && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.duplicate}</p>}
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Tecnologías utilizadas: </label>
            <input 
              type="text" 
              name="technologies" 
              value={projectInput.technologies} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="Ej. React, Node.js, MongoDB"
            />
            {errors.technologies && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.technologies}</p>}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Enlace al Repositorio: </label>
            <input 
              type="text" 
              name="repoUrl" 
              value={projectInput.repoUrl} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="https://github.com/..."
            />
            {errors.repoUrl && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.repoUrl}</p>}
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Enlace al Deploy: </label>
            <input 
              type="text" 
              name="deployUrl" 
              value={projectInput.deployUrl} 
              onChange={handleChange} 
              className="glass-input"
              placeholder="https://midominio.com"
            />
            {errors.deployUrl && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.deployUrl}</p>}
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-h)' }}>Descripción: </label>
          <textarea 
            name="description" 
            value={projectInput.description} 
            onChange={handleChange} 
            rows="3"
            className="glass-input"
            style={{ resize: 'vertical' }}
            placeholder="Describe brevemente el propósito y tu rol en este proyecto..."
          />
          {errors.description && <p style={{ color: '#ff4d4f', margin: '5px 0 0 0', fontSize: '0.85rem' }}>{errors.description}</p>}
        </div>

        <button type="submit" className="glass-button">Agregar Proyecto</button>
      </form>

      <div style={{ marginTop: '35px' }}>
        <h3 style={{ color: 'var(--text-h)', marginBottom: '20px', fontSize: '1.2rem', fontWeight: '700' }}>
          Proyectos Agregados ({projects.length})
        </h3>
        {projects.length === 0 ? (
          <p style={{ color: 'var(--text)', fontStyle: 'italic' }}>Aún no has agregado proyectos.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {projects.map((project) => (
              <li 
                key={project.id} 
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
                  <strong style={{ color: 'var(--text-h)', fontSize: '1.05rem' }}>{project.name}</strong>
                  <p style={{ margin: '5px 0', fontSize: '0.9rem', color: 'var(--accent)', fontWeight: '600' }}>{project.technologies}</p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.4' }}>{project.description}</p>
                </div>
                <button 
                  onClick={() => deleteItem('projects', project.id)}
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