import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import './styles/globals.css';
import { Footer, Navbar } from './components';

const App = () => {
  return (
    <div className='layout'>
    <head>
      <title>eCommerce</title>
    </head>
    <header>
      <Navbar />
    </header>
    <main className='main-container'>
      <Home />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  );
};
export default App;
