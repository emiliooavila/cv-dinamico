import { useCV } from '../context/CVContext';

export default function Preview() {
  const { cvData } = useCV();
  const { personalData, skills, projects, education, experience } = cvData;

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <div 
        id="cv-preview-document"
        style={{ 
          backgroundColor: '#1a1a1a', 
          color: '#ffffff', 
          width: '100%', 
          maxWidth: '800px', 
          padding: '40px', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
          fontFamily: 'Arial, sans-serif',
          borderRadius: '8px'
        }}
      >
        <header style={{ borderBottom: '2px solid #444', paddingBottom: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5rem', color: '#ffffff' }}>
              {personalData.fullName || 'Tu Nombre Completo'}
            </h1>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '1.5rem', color: '#a0a0a0' }}>
              {personalData.profession || 'Tu Profesión'}
            </h2>
            <div style={{ fontSize: '0.9rem', color: '#cccccc', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {personalData.email && <span>{personalData.email}</span>}
              {personalData.phone && <span>{personalData.phone}</span>}
              {personalData.location && <span>{personalData.location}</span>}
            </div>
          </div>
          {personalData.profileImage && (
            <img 
              src={personalData.profileImage} 
              alt="Perfil" 
              style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #333' }}
            />
          )}
        </header>

        {personalData.description && (
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '1.1rem', color: '#ffffff' }}>
              Perfil Profesional
            </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.95rem', color: '#eaeaea' }}>{personalData.description}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '1.1rem', color: '#ffffff' }}>
              Experiencia Profesional
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {experience.map(exp => (
                <div key={exp.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ margin: '0', fontSize: '1.05rem', color: '#ffffff' }}>{exp.role}</h4>
                    <span style={{ fontSize: '0.9rem', color: '#a0a0a0', fontWeight: 'bold' }}>{exp.period}</span>
                  </div>
                  <strong style={{ display: 'block', margin: '5px 0', fontSize: '0.95rem', color: '#cccccc' }}>{exp.company}</strong>
                  <p style={{ margin: '5px 0', fontSize: '0.95rem', lineHeight: '1.5', color: '#eaeaea' }}>{exp.description}</p>
                  {exp.technologies && (
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.85rem', color: '#a0a0a0' }}>
                      <strong style={{ color: '#cccccc' }}>Tecnologías:</strong> {exp.technologies}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '1.1rem', color: '#ffffff' }}>
              Educación
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {education.map(edu => (
                <div key={edu.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h4 style={{ margin: '0', fontSize: '1.05rem', color: '#ffffff' }}>{edu.program}</h4>
                    <span style={{ fontSize: '0.9rem', color: '#a0a0a0', fontWeight: 'bold' }}>{edu.period}</span>
                  </div>
                  <strong style={{ display: 'block', margin: '5px 0', fontSize: '0.95rem', color: '#cccccc' }}>{edu.institution}</strong>
                  <p style={{ margin: '5px 0 0 0', fontSize: '0.95rem', lineHeight: '1.5', color: '#eaeaea' }}>{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '1.1rem', color: '#ffffff' }}>
              Proyectos
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {projects.map(proj => (
                <div key={proj.id}>
                  <h4 style={{ margin: '0', fontSize: '1.05rem', color: '#ffffff' }}>{proj.name}</h4>
                  <p style={{ margin: '5px 0', fontSize: '0.85rem', color: '#a0a0a0' }}>
                    <strong style={{ color: '#cccccc' }}>Tecnologías:</strong> {proj.technologies}
                  </p>
                  <p style={{ margin: '5px 0', fontSize: '0.95rem', lineHeight: '1.5', color: '#eaeaea' }}>{proj.description}</p>
                  <div style={{ fontSize: '0.85rem', display: 'flex', gap: '15px' }}>
                    {proj.repoUrl && <a href={proj.repoUrl} target="_blank" rel="noreferrer" style={{ color: '#66b3ff' }}>Repositorio</a>}
                    {proj.deployUrl && <a href={proj.deployUrl} target="_blank" rel="noreferrer" style={{ color: '#66b3ff' }}>Deploy</a>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section style={{ marginBottom: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #444', paddingBottom: '5px', textTransform: 'uppercase', fontSize: '1.1rem', color: '#ffffff' }}>
              Habilidades
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.map(skill => (
                <span 
                  key={skill.id} 
                  style={{ 
                    backgroundColor: '#333333', 
                    padding: '5px 10px', 
                    borderRadius: '4px', 
                    fontSize: '0.9rem',
                    color: '#ffffff',
                    border: '1px solid #555'
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