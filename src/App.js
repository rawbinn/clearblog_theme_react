import React from 'react';
import './App.css';
import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Routes from './Routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
