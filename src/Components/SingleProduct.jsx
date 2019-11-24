import React from "react";

const SingleProduct = props => {
  const { product, setItemQtyDown, setItemQtyUp, productKey } = props;

  return (
    <div className='productBox'>
      <h2>{product.name}</h2>
      <p>Weight: {product.gram} g</p>
      <p>Price: {product.price} CZK</p>
      <button onClick={() => setItemQtyUp(productKey)}>Add to cart</button>
      <button onClick={() => setItemQtyDown(productKey)}>
        Remove from cart
      </button>
    </div>
  );
};

export default SingleProduct;
