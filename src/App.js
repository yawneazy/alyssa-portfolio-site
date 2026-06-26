import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Work from './pages/Work';
import Design from './pages/Design';
// import Play from './pages/Play';
import About from './pages/About';

function App() {
  return ( 
    <Router>
    <div className="App">
       <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/design" element={<Design />} />
          {/* <Route path="/play" element={<Play />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
