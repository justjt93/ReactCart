import React from "react";

const SingleProduct = props => {
  const { product, setItemQtyDown, setItemQtyUp, productKey } = props;

  return (
    <div className='productBox'>
      <h2>{product.name}</h2>
      <img src={product.photoURL} alt='Coffee Bag' />
      <p>Weight: {product.gram} g</p>
      <h4>Price: {product.price} CZK</h4>
      <div className='btnContainer'>
        <button onClick={() => setItemQtyUp(productKey)}>Add to cart</button>
        <button onClick={() => setItemQtyDown(productKey)}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
