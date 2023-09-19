import React from 'react';
import { HeroBanner, FooterBanner } from '../../components';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Best Selling Productos</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {['Producto 1', 'Producto 2'].map((product) => product)}
      </div>

      <FooterBanner />
    </>
  );
};

export default Home;
