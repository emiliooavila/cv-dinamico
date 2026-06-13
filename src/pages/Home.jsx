import { Link, useNavigate } from 'react-router-dom';
import { useCV } from '../context/CVContext';

export default function Home() {
  const { loadMockData, resetCV, cvData } = useCV();
  const navigate = useNavigate();

  const handleLoadMock = () => {
    loadMockData();
    alert("¡Datos de ejemplo cargados con éxito! Redirigiendo a la Previsualización...");
    navigate('/preview');
  };

  const handleReset = () => {
    if (window.confirm("¿Estás seguro de que deseas reiniciar todos los datos? Esto no se puede deshacer.")) {
      resetCV();
      alert("Se han eliminado todos los datos.");
    }
  };

  return (
    <div style={{ 
      padding: '60px 20px', 
      maxWidth: '900px', 
      margin: '0 auto', 
      textAlign: 'center',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
    }}>
      {/* Hero Section */}
      <div style={{ marginBottom: '50px' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: '900', 
          color: 'var(--text-h)', 
          margin: '0 0 16px 0', 
          letterSpacing: '-1.5px',
          lineHeight: '1.1'
        }}>
          Crea tu CV Profesional con <span style={{ color: 'var(--accent)' }}>DevProfile</span>
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text)', 
          maxWidth: '600px', 
          margin: '0 auto 32px auto',
          lineHeight: '1.6'
        }}>
          Un generador dinámico de currículum en PDF diseñado especialmente para desarrolladores y profesionales técnicos.
        </p>
        
        {/* Call to Actions */}
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <Link to="/editor" style={{ 
            padding: '14px 28px', 
            backgroundColor: 'var(--accent)', 
            color: '#ffffff', 
            textDecoration: 'none', 
            borderRadius: '8px', 
            fontWeight: '700', 
            fontSize: '1rem',
            boxShadow: '0 4px 10px rgba(170, 59, 255, 0.3)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Comenzar Editor
          </Link>
          
          <button 
            onClick={handleLoadMock}
            style={{ 
              padding: '14px 28px', 
              backgroundColor: 'var(--bg)', 
              color: 'var(--text-h)', 
              border: '1px solid var(--border)', 
              borderRadius: '8px', 
              fontWeight: '700', 
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: 'var(--shadow)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Cargar Datos de Ejemplo
          </button>
        </div>
      </div>

      {/* Grid de Características */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '24px', 
        marginBottom: '60px',
        textAlign: 'left'
      }}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <div style={iconContainerStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </div>
          <h3 style={cardTitleStyle}>Editor Dinámico</h3>
          <p style={cardDescStyle}>Rellena tus datos personales, educación, experiencia y proyectos de forma rápida y sencilla.</p>
        </div>
        
        {/* Card 2 */}
        <div style={cardStyle}>
          <div style={iconContainerStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
          </div>
          <h3 style={cardTitleStyle}>Previsualización A4</h3>
          <p style={cardDescStyle}>Visualiza el diseño de tu hoja de vida en tiempo real con una proporción adaptada a impresión.</p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <div style={iconContainerStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/><path d="M6 2h12v4H6z"/></svg>
          </div>
          <h3 style={cardTitleStyle}>Exportación PDF</h3>
          <p style={cardDescStyle}>Descarga tu currículum en formato PDF optimizado en blanco y negro de alta calidad tipográfica.</p>
        </div>

        {/* Card 4 */}
        <div style={cardStyle}>
          <div style={iconContainerStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
          </div>
          <h3 style={cardTitleStyle}>Gráfica de Skills</h3>
          <p style={cardDescStyle}>Observa un desglose interactivo de tus habilidades directamente desde el Dashboard.</p>
        </div>
      </div>

      {/* Reset Data - Admin zone */}
      {cvData.personalData.fullName && (
        <div style={{ 
          padding: '20px', 
          border: '1px dashed #feb2b2', 
          borderRadius: '8px', 
          backgroundColor: 'rgba(254, 178, 178, 0.1)',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontWeight: '700', color: 'var(--text-h)', display: 'block' }}>Datos actualmente guardados</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text)' }}>Tienes información de <strong>{cvData.personalData.fullName}</strong> en la caché local.</span>
          </div>
          <button 
            onClick={handleReset}
            style={{ 
              padding: '8px 16px', 
              backgroundColor: '#e53e3e', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px', 
              fontWeight: '600', 
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            Limpiar Memoria
          </button>
        </div>
      )}
    </div>
  );
}

const cardStyle = {
  padding: '24px',
  backgroundColor: 'var(--bg)',
  border: '1px solid var(--border)',
  borderRadius: '10px',
  boxShadow: 'var(--shadow)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'default'
};

const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '32px',
  marginBottom: '16px'
};

const cardTitleStyle = {
  margin: '0 0 8px 0',
  fontSize: '1.15rem',
  fontWeight: '700',
  color: 'var(--text-h)'
};

const cardDescStyle = {
  margin: '0',
  fontSize: '0.9rem',
  color: 'var(--text)',
  lineHeight: '1.5'
};