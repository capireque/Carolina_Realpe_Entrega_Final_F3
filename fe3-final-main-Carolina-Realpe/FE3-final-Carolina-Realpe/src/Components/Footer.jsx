import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';

const Footer = () => {
  const { state } = useContext(GlobalContext);
  const themeClass = state?.themeClass || 'light-theme';
  return (
    <footer className={themeClass}
    style={{
      backgroundColor: state.theme === 'dark' ? '#000000' : '#FFEBCD',
      color: state.theme === 'dark' ? '#F8F8FF' : '#000000',
    }}>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
