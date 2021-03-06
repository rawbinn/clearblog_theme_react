import React from 'react';
import './App.css';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Routes from './Routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
