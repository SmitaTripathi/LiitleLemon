
import './App.css';
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Navb from './components/navb';


function App() {
  return (
    <div className="App">
      <Header />
      <Navb/>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
