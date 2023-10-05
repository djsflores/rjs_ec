import React from 'react';
import { HeroBanner, FooterBanner, Product } from '../../components';
import bannerData from '../../assets/data/banner';
import productData from '../../assets/data/product';
import productImgData from '../../assets/data/product_img';

const Home = () => {
  return (
    <>
      <HeroBanner bannerData={bannerData && bannerData[0]} />
      <div className='products-heading'>
        <h2>Best Selling Productos</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {productData?.slice(0, 8).map((product) => <Product
            key={product.id}
            productData={product}
            productImgData={productImgData.filter(item => item.product_id === product.id)} />)}
      </div>

      <FooterBanner bannerData={bannerData && bannerData[1]} />
    </>
  );
};

export default Home;
