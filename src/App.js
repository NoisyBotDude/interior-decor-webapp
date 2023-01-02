import './App.css';
import React from 'react';
import Navbar from './components/Navbaar';
import Home from './pages/home';
import DesignIdeas from './pages/design_ideas';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactpage from './pages/contactpage';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/design_ideas" element={<DesignIdeas />} />
        <Route exact path="/contact" element={<Contactpage />} />
      </Routes>
    </Router>
  );

}

export default App;
