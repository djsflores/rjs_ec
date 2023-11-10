import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({
  productData: {
    name, price, id,
  }, productImgData,
}) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
      {/* <Link to={'/detail'}> */}
        <div className='product-card'>
          <img
            src={productImgData && productImgData[0].img}
            width={250}
            height={250}
            className='product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
