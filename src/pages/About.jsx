export default function About() {
  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '850px', 
      margin: '0 auto',
      textAlign: 'left'
    }}>
      <h1 style={{ 
        fontFamily: 'var(--display)', 
        fontWeight: '800', 
        color: 'var(--accent)', 
        fontSize: '3.5rem', 
        margin: '0 0 15px 0', 
        letterSpacing: '-1px',
        textAlign: 'center'
      }}>
        Acerca de
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text)', marginBottom: '40px', fontSize: '1.1rem' }}>
        Información académica, estructura del software y equipo desarrollador de <strong>DevProfile</strong>.
      </p>

      {/* Tarjeta Informativa de la Materia */}
      <div style={{ 
        padding: '24px', 
        backgroundColor: 'var(--bg)', 
        border: '1px solid var(--border)', 
        borderRadius: '8px', 
        marginBottom: '30px',
        boxShadow: 'var(--shadow)'
      }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: 'var(--accent)', fontWeight: '700' }}>Contexto Académico</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div>
            <strong style={{ color: 'var(--text-h)', display: 'block', fontSize: '0.85rem', textTransform: 'uppercase' }}>Materia</strong>
            <span style={{ color: 'var(--text)' }}>Tecnologías Web / React</span>
          </div>
          <div>
            <strong style={{ color: 'var(--text-h)', display: 'block', fontSize: '0.85rem', textTransform: 'uppercase' }}>Profesor</strong>
            <span style={{ color: 'var(--text)' }}>Ing. Irving Cardona</span>
          </div>
          <div>
            <strong style={{ color: 'var(--text-h)', display: 'block', fontSize: '0.85rem', textTransform: 'uppercase' }}>Proyecto Final</strong>
            <span style={{ color: 'var(--text)' }}>DevProfile: Generador de CV</span>
          </div>
          <div>
            <strong style={{ color: 'var(--text-h)', display: 'block', fontSize: '0.85rem', textTransform: 'uppercase' }}>Periodo</strong>
            <span style={{ color: 'var(--text)' }}>Semestre 2026-A</span>
          </div>
        </div>
      </div>

      {/* Estructura del Software */}
      <div style={{ 
        padding: '24px', 
        backgroundColor: 'var(--bg)', 
        border: '1px solid var(--border)', 
        borderRadius: '8px', 
        marginBottom: '30px',
        boxShadow: 'var(--shadow)'
      }}>
        <h2 style={{ margin: '0 0 12px 0', fontSize: '1.3rem', color: 'var(--text-h)', fontWeight: '700' }}>Estructura y Arquitectura</h2>
        <p style={{ color: 'var(--text)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
          La aplicación está estructurada de forma modular, separando componentes lógicos, vistas del sistema, hooks personalizados y el manejo del estado global.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {/* Carpetas */}
          <div>
            <h3 style={{ 
              margin: '0 0 8px 0', 
              fontSize: '0.98rem', 
              fontWeight: '700', 
              color: 'var(--text-h)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
              Distribución de Carpetas
            </h3>
            <pre style={{ 
              margin: '0', 
              padding: '12px', 
              backgroundColor: 'var(--code-bg)', 
              borderRadius: '6px', 
              fontSize: '0.82rem', 
              color: 'var(--text-h)', 
              overflowX: 'auto',
              border: '1px solid var(--border)',
              fontFamily: 'var(--mono)'
            }}>
{`src/
  ├── components/   # Formularios, Botones y Navbar
  ├── context/      # CVContext (Estado Global y Persistencia)
  ├── hooks/        # useTheme (Control de Modo Oscuro)
  ├── pages/        # Vistas (Inicio, Editor, Preview, Dashboard)
  ├── styles/       # Hojas de estilo globales y variables CSS
  ├── App.jsx       # Enrutamiento de la aplicación
  └── main.jsx      # Punto de entrada`}
            </pre>
          </div>

          {/* Componentes Principales */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: '700', color: 'var(--accent)' }}>Estado Global (`CVContext.jsx`)</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--text)', lineHeight: '1.4', display: 'block' }}>
                Utiliza la API Context de React para centralizar los datos del currículum, coordinar acciones CRUD y persistir automáticamente la información en el `localStorage` del navegador.
              </span>
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: '700', color: 'var(--accent)' }}>Control de Modo Oscuro (`useTheme.js`)</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--text)', lineHeight: '1.4', display: 'block' }}>
                Un custom hook que sincroniza el tema visual de la aplicación agregando o eliminando la clase `.dark` del elemento raíz `&lt;html&gt;` y guardando la preferencia en `localStorage`.
              </span>
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: '700', color: 'var(--accent)' }}>Dashboard Interactivo (`recharts`)</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--text)', lineHeight: '1.4', display: 'block' }}>
                Visualización gráfica de habilidades procesando categorías dinámicas e integrándose directamente con la base de datos local temporal en tiempo real.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Integrantes del Equipo */}
      <div style={{ 
        padding: '24px', 
        backgroundColor: 'var(--bg)', 
        border: '1px solid var(--border)', 
        borderRadius: '8px', 
        boxShadow: 'var(--shadow)'
      }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: 'var(--text-h)', fontWeight: '700' }}>Equipo de Desarrollo</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          
          {/* Integrante 1 - Diego Delgado */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '12px 16px', 
            border: '1px solid var(--border)', 
            borderRadius: '8px', 
            flex: '1 1 calc(50% - 10px)',
            backgroundColor: 'var(--code-bg)'
          }}>
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-h)', fontSize: '0.95rem' }}>Diego Delgado</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text)' }}>Desarrollador de Software</span>
            </div>
          </div>
          
          {/* Integrante 2 - Emilio Avila */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '12px 16px', 
            border: '1px solid var(--border)', 
            borderRadius: '8px', 
            flex: '1 1 calc(50% - 10px)',
            backgroundColor: 'var(--code-bg)'
          }}>
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-h)', fontSize: '0.95rem' }}>Emilio Avila</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text)' }}>Desarrollador de Software</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}