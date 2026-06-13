import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '12px 24px', 
      backgroundColor: 'var(--bg)', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--border)',
      transition: 'background-color 0.3s ease, border-color 0.3s ease',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '800', fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
          DevProfile
        </Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/editor" style={{ color: 'var(--text-h)', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', transition: 'color 0.2s' }}>
            Editor CV
          </Link>
          <Link to="/preview" style={{ color: 'var(--text-h)', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', transition: 'color 0.2s' }}>
            Previsualización
          </Link>
          <Link to="/dashboard" style={{ color: 'var(--text-h)', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', transition: 'color 0.2s' }}>
            Dashboard
          </Link>
          <Link to="/about" style={{ color: 'var(--text-h)', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', transition: 'color 0.2s' }}>
            Acerca de
          </Link>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  );
}