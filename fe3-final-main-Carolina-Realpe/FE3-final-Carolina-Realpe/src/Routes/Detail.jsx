import React, { useState, useEffect , useContext} from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context';


const Detail = () => {
  const { id } = useParams(); 
  const [dentist, setDentist] = useState(null);
  const { state } = useContext(GlobalContext);
  const themeClass = state?.themeClass || 'light-theme';


  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    < >
      <h1>Detail Dentist {id}</h1>
      {dentist && (
        <div className={themeClass}
        style={{
          backgroundColor: state.theme === 'dark' ? '#000000' : '#FFEBCD',
          color: state.theme === 'dark' ? '#F8F8FF' : '#000000',
          textAlign:'center',
          
        }}>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
