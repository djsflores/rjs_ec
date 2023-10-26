import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = ({ bannerData }) => {
  console.log(bannerData);
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{bannerData.smallText}</p>
        <h3>{bannerData.midText}</h3>
        <h1>{bannerData.largeText}</h1>
        <img src={bannerData.img} alt='headphones' className='hero-banner-image' />
        <div>
          <Link to='/product/ID'>
            <button type='button'>{bannerData.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{bannerData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
