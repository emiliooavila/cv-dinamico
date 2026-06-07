import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '15px', 
      backgroundColor: '#242424', 
      display: 'flex', 
      gap: '20px',
      borderBottom: '1px solid #444'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Inicio
      </Link>
      <Link to="/editor" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Editor CV
      </Link>
      <Link to="/preview" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Previsualización
      </Link>
      <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Dashboard
      </Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Acerca de
      </Link>
    </nav>
  );
}