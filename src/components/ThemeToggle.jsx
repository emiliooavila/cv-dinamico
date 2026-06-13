import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        borderRadius: '50%',
        color: theme === 'dark' ? '#facc15' : '#6b7280',
        backgroundColor: theme === 'dark' ? '#1e293b' : '#f1f5f9',
        border: `1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'}`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        width: '40px',
        height: '40px',
        boxShadow: theme === 'dark' ? '0 0 10px rgba(250, 204, 21, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.05)'
      }}
      title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1) rotate(15deg)';
        e.currentTarget.style.backgroundColor = theme === 'dark' ? '#334155' : '#e2e8f0';
        e.currentTarget.style.boxShadow = theme === 'dark' ? '0 0 15px rgba(250, 204, 21, 0.25)' : '0 4px 6px rgba(0, 0, 0, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
        e.currentTarget.style.backgroundColor = theme === 'dark' ? '#1e293b' : '#f1f5f9';
        e.currentTarget.style.boxShadow = theme === 'dark' ? '0 0 10px rgba(250, 204, 21, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.05)';
      }}
    >
      {theme === 'dark' ? (
        // Icono de sol (Sun)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        // Icono de luna (Moon)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}
