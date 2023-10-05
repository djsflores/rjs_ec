import React from 'react';

const FooterBanner = ({ bannerData }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{bannerData.discount}</p>
          <h3>{bannerData.largeText}</h3>
          <h3>{bannerData.largerText}</h3>
          <p>{bannerData.saleTime}</p>
        </div>
        <div className='right'>
          <p>{bannerData.smallText}</p>
          <h3>{bannerData.midText}</h3>
          <p>{bannerData.description}</p>
          <button type='button'>{bannerData.buttonText}</button>
        </div>
        <img src={bannerData.img} alt='headphones' className='footer-banner-image' />
      </div>

    </div>
  );
};

export default FooterBanner;
