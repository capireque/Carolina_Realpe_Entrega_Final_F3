import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const theme = state.theme || 'light';
  const themeClass = state.themeClass || 'light-theme';

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  return (
    <nav
      className={themeClass}
      style={{
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        marginBottom: '1rem',
        backgroundColor: theme === 'dark' ? '#000000' : '#FFEBCD',
        color: theme === 'dark' ? '#000000' : '#FFEBCD',
      }}
    >
      <div className="navegador">
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Detail">Detail</Link>
          </li>
          <li>
            <Link to="/Favs">Favs</Link>
          </li>
        </ul>
      </div>
      <button
        onClick={toggleTheme}
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
