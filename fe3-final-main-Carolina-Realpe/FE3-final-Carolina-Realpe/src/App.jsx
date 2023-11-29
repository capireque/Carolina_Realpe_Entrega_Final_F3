import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import { GlobalContextProvider } from './Components/utils/global.context';

function App() {
  
  return (
    <GlobalContextProvider>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/Favs" element={<Favs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </GlobalContextProvider>
  );
}

export default App;
