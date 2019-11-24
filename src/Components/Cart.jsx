import React from "react";

const Cart = props => {
  const { cartContent, products, setItemQtyDown, setItemQtyUp } = props;

  return (
    <div className='Cart'>
      <ul>
        {Object.keys(cartContent).map(key => {
          return (
            <li key={key}>
              <h2>{products[key].name}</h2>
              <p>Quantity:{products[key].qty}</p>
              <button onClick={() => setItemQtyUp(key)}>+</button>
              <button onClick={() => setItemQtyDown(key)}>-</button>
              <p>Total: {products[key].price * products[key].qty} CZK </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
