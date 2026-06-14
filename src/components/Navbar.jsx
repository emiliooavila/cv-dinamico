import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: '/editor', label: 'Editor CV' },
    { path: '/preview', label: 'Previsualización' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/about', label: 'Acerca de' }
  ];

  return (
    <nav className="glass-panel" style={{ 
      padding: '12px 24px', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '20px auto 30px',
      width: '95%',
      maxWidth: '1200px',
      position: 'sticky',
      top: '20px',
      zIndex: 1000,
    }}>
      
      <Link to="/" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: '900', fontSize: '1.3rem', letterSpacing: '-0.8px', zIndex: 2 }}>
        DevProfile
      </Link>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', position: 'relative' }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                position: 'relative',
                padding: '10px 20px',
                textDecoration: 'none',
                fontWeight: isActive ? '800' : '600',
                color: isActive ? 'var(--text-h)' : 'var(--text)',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  layout
                  initial={false}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 35 
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'var(--accent-bg)', 
                    border: '1px solid var(--accent-border)', 
                    borderRadius: '24px',
                    boxShadow: '0 4px 15px rgba(170, 59, 255, 0.15)',
                    zIndex: -1,
                  }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 10 }}>{item.label}</span>
            </Link>
          );
        })}
      </div>
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        <ThemeToggle />
      </div>
    </nav>
  );
}