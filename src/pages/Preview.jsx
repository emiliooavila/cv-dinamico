import { useCV } from '../context/CVContext';
import { Link } from 'react-router-dom';

export default function Preview() {
  const { cvData } = useCV();
  const { personalData, skills, projects, education, experience } = cvData;

  const handlePrint = () => {
    window.print();
  };

  const hasData = personalData.fullName || skills.length > 0 || projects.length > 0 || education.length > 0 || experience.length > 0;

  return (
    <div style={{ padding: '30px 20px', minHeight: 'calc(100vh - 65px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div className="no-print glass-panel" style={{ 
        width: '100%', 
        maxWidth: '850px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '30px',
        padding: '16px 24px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/editor" className="glass-input" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '10px 20px', 
            textDecoration: 'none', 
            fontWeight: '600',
            width: 'auto'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Volver al Editor
          </Link>
        </div>
        
        <button 
          onClick={handlePrint}
          disabled={!hasData}
          className="glass-button"
          style={{ 
            width: 'auto',
            margin: '0',
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '10px 24px', 
            opacity: hasData ? '1' : '0.5',
            cursor: hasData ? 'pointer' : 'not-allowed',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/><path d="M6 2h12v4H6z"/></svg>
          Exportar a PDF
        </button>
      </div>

      {!hasData && (
        <div className="no-print glass-panel" style={{ 
          width: '100%', 
          maxWidth: '850px', 
          padding: '24px', 
          marginBottom: '20px',
          textAlign: 'center',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
          <span>Tu currículum está vacío. Ve al <Link to="/editor" style={{ color: 'var(--accent)', fontWeight: '800', textDecoration: 'underline' }}>Editor</Link> para capturar tus datos.</span>
        </div>
      )}

      <div 
        id="cv-preview-document"
        className="cv-sheet glass-panel"
        style={{ 
          width: '100%', 
          maxWidth: '850px', 
          minHeight: '1100px', 
          padding: '60px', 
          boxSizing: 'border-box',
        }}
      >
        <header style={{ 
          borderBottom: '2.5px solid var(--accent)', 
          paddingBottom: '24px', 
          marginBottom: '32px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div style={{ flex: '1' }}>
            <h1 style={{ margin: '0 0 8px 0', fontSize: '2.6rem', fontWeight: '800', color: 'var(--text-h)', letterSpacing: '-1px', textAlign: 'left', lineHeight: '1.1' }}>
              {personalData.fullName || 'Nombre Completo'}
            </h1>
            <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', fontWeight: '600', color: 'var(--accent)', textAlign: 'left' }}>
              {personalData.profession || 'Profesión o Especialidad'}
            </h2>
            
            <div style={{ 
              fontSize: '0.9rem', 
              color: 'var(--text)', 
              display: 'flex', 
              gap: '16px 24px', 
              flexWrap: 'wrap',
              marginTop: '15px'
            }}>
              {personalData.email && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {personalData.email}
                </span>
              )}
              {personalData.phone && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {personalData.phone}
                </span>
              )}
              {personalData.location && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  {personalData.location}
                </span>
              )}
            </div>
          </div>
          
          {personalData.profileImage && (
            <div style={{ flexShrink: 0 }}>
              <img 
                src={personalData.profileImage} 
                alt="Foto de Perfil" 
                style={{ 
                  width: '130px', 
                  height: '130px', 
                  borderRadius: '24px', 
                  objectFit: 'cover', 
                  border: '2px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                }} 
              />
            </div>
          )}
        </header>

        <div style={{ display: 'flex', gap: '40px', flexDirection: 'row' }} className="cv-body-grid">
          
          <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {personalData.description && (
              <section className="cv-section">
                <h3 className="cv-section-title">Perfil Profesional</h3>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.7', textAlign: 'justify', whiteSpace: 'pre-line' }}>
                  {personalData.description}
                </p>
              </section>
            )}

            {experience && experience.length > 0 && (
              <section className="cv-section">
                <h3 className="cv-section-title">Experiencia Profesional</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {experience.map(exp => (
                    <div key={exp.id} className="cv-item">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '5px' }}>
                        <h4 style={{ margin: '0', fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-h)' }}>{exp.role}</h4>
                        <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: '700', backgroundColor: 'var(--accent-bg)', padding: '4px 10px', borderRadius: '12px' }}>{exp.period}</span>
                      </div>
                      <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: '600', marginBottom: '8px' }}>{exp.company}</span>
                      <p style={{ margin: '0 0 8px 0', fontSize: '0.92rem', lineHeight: '1.6', textAlign: 'justify', whiteSpace: 'pre-line' }}>{exp.description}</p>
                      {exp.technologies && (
                        <p style={{ margin: '0', fontSize: '0.85rem' }}>
                          <strong style={{ color: 'var(--text-h)' }}>Herramientas:</strong> {exp.technologies}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {projects && projects.length > 0 && (
              <section className="cv-section">
                <h3 className="cv-section-title">Proyectos Destacados</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {projects.map(proj => (
                    <div key={proj.id} className="cv-item">
                      <h4 style={{ margin: '0 0 6px 0', fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-h)' }}>{proj.name}</h4>
                      {proj.technologies && (
                        <span style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px' }}>
                          <strong style={{ color: 'var(--text-h)' }}>Tecnologías:</strong> {proj.technologies}
                        </span>
                      )}
                      <p style={{ margin: '0 0 10px 0', fontSize: '0.92rem', lineHeight: '1.6', textAlign: 'justify' }}>{proj.description}</p>
                      
                      <div style={{ fontSize: '0.85rem', display: 'flex', gap: '16px' }} className="no-print">
                        {proj.repoUrl && (
                          <a href={proj.repoUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            Repositorio
                          </a>
                        )}
                        {proj.deployUrl && (
                          <a href={proj.deployUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                            Ver Deploy
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {education && education.length > 0 && (
              <section className="cv-section">
                <h3 className="cv-section-title">Educación</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {education.map(edu => (
                    <div key={edu.id} className="cv-item">
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-h)' }}>{edu.program}</h4>
                      <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent)', marginBottom: '4px' }}>{edu.period}</span>
                      <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>{edu.institution}</span>
                      {edu.description && <p style={{ margin: '0', fontSize: '0.85rem', lineHeight: '1.5' }}>{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {skills && skills.length > 0 && (
              <section className="cv-section">
                <h3 className="cv-section-title">Habilidades</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.map(skill => (
                    <div 
                      key={skill.id} 
                      className="glass-input"
                      style={{ 
                        padding: '6px 14px', 
                        width: 'auto',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        margin: '0'
                      }}
                    >
                      {skill.name} 
                      <span style={{ fontSize: '0.75rem', opacity: 0.7, fontWeight: '400' }}>({skill.level})</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {personalData.links && personalData.links.length > 0 && (
              <section className="cv-section">
                <h3 className="cv-section-title">Enlaces</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {personalData.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{ 
                        color: 'var(--accent)', 
                        textDecoration: 'none', 
                        fontSize: '0.9rem', 
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                      <span style={{ textTransform: 'capitalize' }}>{link.label || 'Enlace'}:</span>
                      <span style={{ fontWeight: '400', color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '160px' }}>{link.url.replace(/^https?:\/\/(www\.)?/, '')}</span>
                    </a>
                  ))}
                </div>
              </section>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}