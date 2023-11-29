import React from "react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context';


const Card = ({ dentist, addFav }) => {
  const { id, name, username, email, phone, website } = dentist;
  const { state } = useContext(GlobalContext);
  const themeClass = state?.themeClass || 'light-theme';
  console.log('Contenido de dentist:', dentist);

  const handleAddFav = () => {
    const dentistToAdd = { id, name, username, email, phone, website };
    console.log('Adding to fav:', dentistToAdd);
    addFav(dentistToAdd);
  };

  return (
    <div className={themeClass}
    style={{
      
      backgroundColor: state.theme === 'dark' ? '#000000' : '#FFEBCD',
      color: state.theme === 'dark' ? '#F8F8FF' : '#000000',
      border: '10px solid #FFFACD',
      padding: '10px', 
      marginBottom: '10px', 
      textAlign:'center'
    }}>
      <h3>{name}</h3>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <Link to={`/dentist/${id}`} className="detail-link">Ver Detalles</Link>
      {typeof addFav === 'function' && (
        <button
          onClick={handleAddFav}
          style={{
            backgroundColor: state.theme === 'dark' ? 'black' : 'green',
            color: state.theme === 'dark' ? 'white' : 'black',
            padding: '10px', 
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add fav
        </button>
      )}
    </div>
  );
};

export default Card;

