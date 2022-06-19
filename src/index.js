import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-q6awaanv.au.auth0.com
//hICQKgR5rODu9h1tuuXmvfabaQWgCA3a

ReactDOM.render(
  <Auth0Provider
    domain="dev-q6awaanv.au.auth0.com"
    clientId="hICQKgR5rODu9h1tuuXmvfabaQWgCA3a"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
