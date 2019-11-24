import React from "react";
import SingleProduct from "./SingleProduct.jsx";

const ProductList = props => {
  const { products, setItemQtyDown, setItemQtyUp } = props;

  return (
    <div className='productList'>
      {Object.keys(products).map(key => {
        return (
          <SingleProduct
            product={products[key]}
            productKey={key}
            key={key}
            setItemQtyDown={setItemQtyDown}
            setItemQtyUp={setItemQtyUp}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
