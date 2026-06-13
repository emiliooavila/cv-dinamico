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
    <div style={{ padding: '30px 20px', minHeight: 'calc(100vh - 65px)', backgroundColor: 'var(--code-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Barra de herramientas - Se ocultará al imprimir */}
      <div className="no-print" style={{ 
        width: '100%', 
        maxWidth: '850px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px',
        padding: '12px 20px',
        backgroundColor: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        boxShadow: 'var(--shadow)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/editor" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px 16px', 
            borderRadius: '6px', 
            backgroundColor: 'var(--code-bg)', 
            color: 'var(--text-h)', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '0.9rem',
            border: '1px solid var(--border)',
            transition: 'all 0.2s'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Volver al Editor
          </Link>
        </div>
        
        <button 
          onClick={handlePrint}
          disabled={!hasData}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '10px 20px', 
            borderRadius: '6px', 
            backgroundColor: hasData ? 'var(--accent)' : '#a0aec0', 
            color: '#ffffff', 
            border: 'none', 
            fontWeight: '700',
            fontSize: '0.9rem',
            cursor: hasData ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s',
            boxShadow: hasData ? '0 4px 6px -1px rgba(170, 59, 255, 0.2)' : 'none'
          }}
          onMouseEnter={(e) => {
            if (hasData) {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.filter = 'brightness(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (hasData) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.filter = 'brightness(1)';
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/><path d="M6 2h12v4H6z"/></svg>
          Exportar a PDF
        </button>
      </div>

      {!hasData && (
        <div className="no-print" style={{ 
          width: '100%', 
          maxWidth: '850px', 
          padding: '24px', 
          backgroundColor: '#feebc8', 
          border: '1px solid #fbd38d', 
          borderRadius: '8px', 
          color: '#7b341e',
          marginBottom: '20px',
          textAlign: 'center',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
          <span>Tu currículum está vacío. Ve al <Link to="/editor" style={{ color: '#7b341e', fontWeight: '700', textDecoration: 'underline' }}>Editor</Link> para capturar tus datos antes de previsualizar o exportar.</span>
        </div>
      )}

      {/* Contenedor del CV - Imita una hoja física */}
      <div 
        id="cv-preview-document"
        className="cv-sheet"
        style={{ 
          backgroundColor: 'var(--bg)', 
          color: 'var(--text-h)', 
          width: '100%', 
          maxWidth: '800px', 
          minHeight: '1050px', /* Proporción A4 aproximada */
          padding: '50px', 
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          borderRadius: '4px',
          boxSizing: 'border-box',
          transition: 'all 0.3s ease',
          border: '1px solid var(--border)'
        }}
      >
        {/* Encabezado Principal */}
        <header style={{ 
          borderBottom: '2.5px solid var(--accent)', 
          paddingBottom: '24px', 
          marginBottom: '28px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div style={{ flex: '1' }}>
            <h1 style={{ margin: '0 0 6px 0', fontSize: '2.4rem', fontWeight: '800', color: 'var(--text-h)', letterSpacing: '-1px', textAlign: 'left', lineHeight: '1.1' }}>
              {personalData.fullName || 'Nombre Completo'}
            </h1>
            <h2 style={{ margin: '0 0 16px 0', fontSize: '1.25rem', fontWeight: '600', color: 'var(--accent)', letterSpacing: '-0.2px', textAlign: 'left' }}>
              {personalData.profession || 'Profesión o Especialidad'}
            </h2>
            
            {/* Información de Contacto */}
            <div style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text)', 
              display: 'flex', 
              gap: '14px 20px', 
              flexWrap: 'wrap',
              marginTop: '10px'
            }}>
              {personalData.email && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  {personalData.email}
                </span>
              )}
              {personalData.phone && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {personalData.phone}
                </span>
              )}
              {personalData.location && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
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
                  width: '110px', 
                  height: '110px', 
                  borderRadius: '12px', 
                  objectFit: 'cover', 
                  border: '3px solid var(--border)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }} 
              />
            </div>
          )}
        </header>

        {/* Cuerpo del CV con diseño estructurado */}
        <div style={{ display: 'flex', gap: '35px', flexDirection: 'row' }} className="cv-body-grid">
          
          {/* Columna Principal - Izquierda (Perfil, Experiencia, Proyectos) */}
          <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '26px' }}>
            
            {/* Perfil Profesional */}
            {personalData.description && (
              <section className="cv-section">
                <h3 className="cv-section-title">
                  Perfil Profesional
                </h3>
                <p style={{ 
                  margin: '0', 
                  fontSize: '0.92rem', 
                  lineHeight: '1.6', 
                  color: 'var(--text)', 
                  textAlign: 'justify',
                  whiteSpace: 'pre-line'
                }}>
                  {personalData.description}
                </p>
              </section>
            )}

            {/* Experiencia Profesional */}
            {experience && experience.length > 0 && (
              <section className="cv-section">
                <h3 className="cv-section-title">
                  Experiencia Profesional
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {experience.map(exp => (
                    <div key={exp.id} className="cv-item" style={{ pageBreakInside: 'avoid' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3px' }}>
                        <h4 style={{ margin: '0', fontSize: '0.98rem', fontWeight: '700', color: 'var(--text-h)' }}>{exp.role}</h4>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600', backgroundColor: 'var(--accent-bg)', padding: '2px 8px', borderRadius: '4px' }}>{exp.period}</span>
                      </div>
                      <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: '600', color: 'var(--text)', marginBottom: '6px' }}>{exp.company}</span>
                      <p style={{ margin: '0 0 6px 0', fontSize: '0.88rem', lineHeight: '1.5', color: 'var(--text)', textAlign: 'justify', whiteSpace: 'pre-line' }}>{exp.description}</p>
                      {exp.technologies && (
                        <p style={{ margin: '0', fontSize: '0.8rem', color: 'var(--text)' }}>
                          <strong style={{ color: 'var(--text-h)' }}>Herramientas:</strong> {exp.technologies}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Proyectos Destacados */}
            {projects && projects.length > 0 && (
              <section className="cv-section">
                <h3 className="cv-section-title">
                  Proyectos Destacados
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {projects.map(proj => (
                    <div key={proj.id} className="cv-item" style={{ pageBreakInside: 'avoid' }}>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.98rem', fontWeight: '700', color: 'var(--text-h)' }}>{proj.name}</h4>
                      {proj.technologies && (
                        <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text)', marginBottom: '6px' }}>
                          <strong style={{ color: 'var(--text-h)' }}>Tecnologías:</strong> {proj.technologies}
                        </span>
                      )}
                      <p style={{ margin: '0 0 8px 0', fontSize: '0.88rem', lineHeight: '1.5', color: 'var(--text)', textAlign: 'justify' }}>{proj.description}</p>
                      
                      <div style={{ fontSize: '0.8rem', display: 'flex', gap: '12px' }} className="no-print">
                        {proj.repoUrl && (
                          <a href={proj.repoUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            Repositorio
                          </a>
                        )}
                        {proj.deployUrl && (
                          <a href={proj.deployUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
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

          {/* Columna Lateral - Derecha (Educación, Habilidades, Enlaces) */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '26px' }}>
            
            {/* Educación */}
            {education && education.length > 0 && (
              <section className="cv-section">
                <h3 className="cv-section-title">
                  Educación
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {education.map(edu => (
                    <div key={edu.id} className="cv-item" style={{ pageBreakInside: 'avoid' }}>
                      <h4 style={{ margin: '0 0 2px 0', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-h)' }}>{edu.program}</h4>
                      <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--accent)', marginBottom: '3px' }}>{edu.period}</span>
                      <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '500', color: 'var(--text)', marginBottom: '4px' }}>{edu.institution}</span>
                      {edu.description && <p style={{ margin: '0', fontSize: '0.8rem', lineHeight: '1.4', color: 'var(--text)' }}>{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Habilidades */}
            {skills && skills.length > 0 && (
              <section className="cv-section">
                <h3 className="cv-section-title">
                  Habilidades
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {skills.map(skill => (
                    <div 
                      key={skill.id} 
                      style={{ 
                        backgroundColor: 'var(--code-bg)', 
                        padding: '4px 10px', 
                        borderRadius: '6px', 
                        fontSize: '0.78rem',
                        color: 'var(--text-h)',
                        border: '1px solid var(--border)',
                        fontWeight: '500',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <strong>{skill.name}</strong> 
                      <span style={{ fontSize: '0.7rem', color: 'var(--text)', opacity: 0.8 }}>({skill.level})</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Redes y Enlaces (Si existen) */}
            {personalData.links && personalData.links.length > 0 && (
              <section className="cv-section">
                <h3 className="cv-section-title">
                  Enlaces
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {personalData.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{ 
                        color: 'var(--accent)', 
                        textDecoration: 'none', 
                        fontSize: '0.82rem', 
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                      <span style={{ textTransform: 'capitalize' }}>{link.label || 'Enlace'}:</span>
                      <span style={{ fontWeight: '400', color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '140px' }}>{link.url.replace(/^https?:\/\/(www\.)?/, '')}</span>
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