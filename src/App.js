import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
   <div className="App">
     <Navbar />
     <Header />
     <Home />
     <Footer />
   </div>
  );
}

export default App;
