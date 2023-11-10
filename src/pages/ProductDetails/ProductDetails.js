import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar,
} from 'react-icons/ai';
import { ProductCard } from '../../components';
import productData from '../../assets/data/product';
import productImgData from '../../assets/data/product_img';

const ProductDetails = () => {
  const params = useParams();
  const [index, setIndex] = useState(0);
  console.log('id recibido', params.productId);
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img
              src={productImgData && productImgData[index].img}
              className='product-detail-image'
            />
          </div>
          <div className='small-images-container'>
            {/* {productImgData?.map((item, i) => ( */}
            {productImgData?.filter(item => item.product_id === 2).map((item, i) => (
            <img
              key={i}
              src={item.img}
              className={i === index ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setIndex(i)}
            />
            ))}
          </div>
        </div>
        <div className='product-detail-desc'>
          <h1>name</h1>
          <div className='reviews'>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>details</p>
          <p className='price'>$ 9999.99</p>
          <div className='quantity'>
            <h3>Quantity: </h3>
            <p className='quantity-desc'>
              <span className='minus' onClick=''><AiOutlineMinus/></span>
              <span className='num' onClick=''>0</span>
              <span className='plus' onClick=''><AiOutlinePlus/></span>
            </p>
          </div>
          <div className="buttons">
            <button type='button' className='add-to-cart' onClick=''>Add to Cart</button>
            <button type='button' className='buy-now' onClick=''>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {productData?.slice(0, 8).map((product) => <ProductCard
            key={product.id}
            productData={product}
            productImgData={productImgData.filter(item => item.product_id === product.id)} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
