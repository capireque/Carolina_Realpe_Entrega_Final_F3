import React, { useEffect, useState, useContext } from 'react';
import Card from '../Components/Card';
import { GlobalContext } from '../Components/utils/global.context';

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { state, dispatch } = useContext(GlobalContext);
  const favDentists = state?.favDentists;
  const themeClass = state?.themeClass || 'light-theme';
  
  useEffect(() => {
    const storedFavDentists = localStorage.getItem('favDentists');
    if (storedFavDentists) {
      dispatch({ type: 'ADD_FAV', payload: JSON.parse(storedFavDentists) });
    }

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const addFavCallback = (dentist) => {
    dispatch({ type: 'ADD_FAV', payload: dentist });
  };

  return (
    <main 
    className={themeClass}
      style={{
        backgroundColor: state.theme === 'dark' ? '#000000' : '#FFEBCD',
        color: state.theme === 'dark' ? '#F8F8FF' : '#000000',
      }}
    >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} addFav={addFavCallback} />
        ))}
      </div>
    </main>
  );
};

export default Home;




