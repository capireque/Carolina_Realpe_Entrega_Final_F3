import React from 'react';
import Card from '../Components/Card';
import { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';

const Favs = (props) => {
  const { state } = useContext(GlobalContext);
  const { favDentists } = state;
  const themeClass = state?.themeClass || 'light-theme';


  console.log('Favoritos:', favDentists);

  return (
    <main className={themeClass}
    style={{
      backgroundColor: state.theme === 'dark' ? '#000000' : '#FFEBCD',
      color: state.theme === 'dark' ? '#F8F8FF' : '#000000',
    }}
    >
      <h1>Favoritos</h1>
      <div className='card-grid'>
        {favDentists && favDentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Favs;






