import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import ProductList from "./Components/ProductList.jsx";
import Cart from "./Components/Cart.jsx";
import Nav from "./Components/Nav.jsx";
import products from "./ourProducts";

const App = () => {
  const [cartContent, setCartContent] = useState({});

  const setItemQtyUp = productKey => {
    if (cartContent[productKey]) {
      setCartContent(prevState => {
        if (prevState[productKey].qty) {
          prevState[productKey].qty = prevState[productKey].qty + 1;
        } else {
          prevState[productKey] = products[productKey];
          prevState[productKey].qty = 1;
        }
        console.log("WAS IN", cartContent);

        return prevState;
      });
    } else {
      setCartContent(prevState => {
        prevState[productKey] = products[productKey];
        prevState[productKey].qty = 1;
        console.log("WASNT YET", cartContent);
        return prevState;
      });
    }
  };

  const setItemQtyDown = productKey => {
    setCartContent(prevState => {
      if (prevState[productKey].qty > 1) {
        prevState[productKey].qty = prevState[productKey].qty - 1;
      } else {
        delete prevState[productKey];
      }
      console.log("DELETE", cartContent);

      return prevState;
    });
  };

  useEffect(() => {
    console.log(cartContent);
  }, [cartContent]);

  const NotFound = () => {
    return <h1>Not Found</h1>;
  };

  return (
    <Router history={history}>
      <Nav />
      <Switch>
        <Route
          exact
          path='/'
          render={props => (
            <ProductList
              products={products}
              setItemQtyDown={setItemQtyDown}
              setItemQtyUp={setItemQtyUp}
            />
          )}
        />
        <Route
          exact
          path='/cart'
          render={props => (
            <Cart
              cartContent={cartContent}
              products={products}
              setItemQtyDown={setItemQtyDown}
              setItemQtyUp={setItemQtyUp}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
