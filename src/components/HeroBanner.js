import React from 'react';

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
          {/* <link href='/product/ID'> */}
            <button type='button'>{bannerData.buttonText}</button>
          {/* </link> */}
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
