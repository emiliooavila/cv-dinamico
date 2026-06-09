import { useCV } from '../context/CVContext';

export default function Preview() {
  const { cvData } = useCV();
  const { personalData, skills, projects, education, experience } = cvData;

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <div 
        id="cv-preview-document"
        style={{ 
          backgroundColor: '#ffffff', 
          color: '#000000', 
          width: '100%', 
          maxWidth: '800px', 
          padding: '40px', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <header style={{ borderBottom: '2px solid #333', paddingBottom: '20px', marginBottom: '20px', textAlign: 'center' }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5rem' }}>
            {personalData.fullName || 'Tu Nombre Completo'}
          </h1>
          <h2 style={{ margin: '0 0 10px 0', fontSize: '1.5rem', color: '#555' }}>
            {personalData.profession || 'Tu Profesión'}
          </h2>
          <div style={{ fontSize: '0.9rem', color: '#666', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            {personalData.email && <span>{personalData.email}</span>}
            {personalData.phone && <span>{personalData.phone}</span>}
            {personalData.location && <span>{personalData.location}</span>}
          </div>
        </header>

        {personalData.description && (
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '1.1rem' }}>
              Perfil Profesional
            </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{personalData.description}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '1.1rem' }}>
              Experiencia Profesional
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {experience.map(exp => (
                <div key={exp.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ margin: '0', fontSize: '1.05rem' }}>{exp.role}</h4>
                    <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'bold' }}>{exp.period}</span>
                  </div>
                  <strong style={{ display: 'block', margin: '5px 0', fontSize: '0.95rem', color: '#444' }}>{exp.company}</strong>
                  <p style={{ margin: '5px 0', fontSize: '0.95rem', lineHeight: '1.5' }}>{exp.description}</p>
                  {exp.technologies && (
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.85rem', color: '#555' }}>
                      <strong>Tecnologías:</strong> {exp.technologies}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '1.1rem' }}>
              Educación
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {education.map(edu => (
                <div key={edu.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ margin: '0', fontSize: '1.05rem' }}>{edu.program}</h4>
                    <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'bold' }}>{edu.period}</span>
                  </div>
                  <strong style={{ display: 'block', margin: '5px 0', fontSize: '0.95rem', color: '#444' }}>{edu.institution}</strong>
                  <p style={{ margin: '5px 0 0 0', fontSize: '0.95rem', lineHeight: '1.5' }}>{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '1.1rem' }}>
              Proyectos
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {projects.map(proj => (
                <div key={proj.id}>
                  <h4 style={{ margin: '0', fontSize: '1.05rem' }}>{proj.name}</h4>
                  <p style={{ margin: '5px 0', fontSize: '0.85rem', color: '#555' }}>
                    <strong>Tecnologías:</strong> {proj.technologies}
                  </p>
                  <p style={{ margin: '5px 0', fontSize: '0.95rem', lineHeight: '1.5' }}>{proj.description}</p>
                  <div style={{ fontSize: '0.85rem', display: 'flex', gap: '15px' }}>
                    {proj.repoUrl && <a href={proj.repoUrl} target="_blank" rel="noreferrer" style={{ color: '#0066cc' }}>Repositorio</a>}
                    {proj.deployUrl && <a href={proj.deployUrl} target="_blank" rel="noreferrer" style={{ color: '#0066cc' }}>Deploy</a>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '1.1rem' }}>
              Habilidades
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.map(skill => (
                <span 
                  key={skill.id} 
                  style={{ 
                    backgroundColor: '#f0f0f0', 
                    padding: '5px 10px', 
                    borderRadius: '4px', 
                    fontSize: '0.9rem',
                    color: '#333',
                    border: '1px solid #ddd'
                  }}
                >
                  <strong>{skill.name}</strong> - {skill.level}
                </span>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}