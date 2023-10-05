import React from 'react';

const Product = ({
  productData: {
    name, description, extendedDescription, price,
  }, productImgData,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default Product;
