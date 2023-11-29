import React from 'react';
import Form from '../Components/Form';
import { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';


const Contact = () => {
  const { state } = useContext(GlobalContext);
  const themeClass = state?.themeClass || 'light-theme';

  return (

    <div className={themeClass}
    style={{
      backgroundColor: state.theme === 'dark' ? '#000000' : '#FFEBCD',
      color: state.theme === 'dark' ? '#F8F8FF' : '#000000',
      textAlign:'center'
    }}
    >
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
