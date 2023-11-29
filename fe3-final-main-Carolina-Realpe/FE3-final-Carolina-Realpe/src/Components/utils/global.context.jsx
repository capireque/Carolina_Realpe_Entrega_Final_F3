import React, { createContext, useReducer, useEffect } from 'react';

export const initialState = {
  theme: 'light',
  dentists: [],
  favDentists: [],
  themeClass: 'light-theme',
};

export const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      localStorage.setItem('theme', action.payload);
      return {
        ...state,
        theme: action.payload,
        themeClass: action.payload === 'dark' ? 'dark-theme' : 'light-theme',
      };
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'ADD_FAV':
      const currentFavDentists = state.favDentists || [];
      const dentistToAdd = action.payload;
      const isDentistInFavs = currentFavDentists.some((dentist) => dentist.id === dentistToAdd.id);

      if (!isDentistInFavs) {
        const newState = { ...state, favDentists: [...currentFavDentists, dentistToAdd] };
        localStorage.setItem('favDentists', JSON.stringify(newState.favDentists));
        alert('Dentista añadido a favoritos');
        return newState;
      }

      console.log('Dentista ya existe en favoritos.');
      alert('Dentista ya existe en favoritos.');
      return { ...state };

    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme');
  const storedFavDentists = JSON.parse(localStorage.getItem('favDentists'));
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    theme: storedTheme || initialState.theme,
    favDentists: storedFavDentists || initialState.favDentists,
    themeClass: storedTheme === 'dark' ? 'dark-theme' : 'light-theme',
  });

  const fetchDentists = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({ type: 'SET_DENTISTS', payload: data });
    } catch (error) {
      console.error('Error fetching dentists:', error);
    }
  };

  useEffect(() => {
    fetchDentists();
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className={state.themeClass}>
        {children}
      </div>
    </GlobalContext.Provider>
  );
};
