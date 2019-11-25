import React from "react";

const Cart = props => {
  const { cartContent, products, setItemQtyDown, setItemQtyUp } = props;
  console.log(Object.keys(cartContent).length);

  let cartTotal = 0;
  const checkoutTable = (
    <div className='checkoutTableWrap'>
      <table className='checkoutTable'>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Picture</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {Object.keys(cartContent).map(key => {
            cartTotal = cartTotal + products[key].price * products[key].qty;
            return (
              <tr>
                <td>{products[key].name}</td>
                <td>
                  <img src={products[key].photoURL} alt='Coffee Bag' />
                </td>
                <td>{products[key].price * products[key].qty} CZK</td>
                <td>
                  <div className='qtyCellWrap'>
                    {products[key].qty}
                    <div className='qtyCell'>
                      <button onClick={() => setItemQtyUp(key)}>+</button>
                      <button onClick={() => setItemQtyDown(key)}>-</button>
                    </div>
                  </div>
                </td>
              </tr>

              //   <p>Total: {products[key].price * products[key].qty} CZK </p>
              // </div>
            );
          })}
          <tr>
            <td colspan='4 ' className='checkoutTotal'>
              Your total is: {cartTotal} CZK
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      {Object.keys(cartContent).length > 0
        ? checkoutTable
        : "Your cart is empty."}
    </>
  );
};

export default Cart;
