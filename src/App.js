import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import './styles/globals.css';
import { Footer, Navbar } from './components';
import ErrorPage from './pages/ErrorPage/ErrorPage';

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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </main>
    <footer>
      <Footer />
    </footer>
  </div>
  );
};
export default App;
