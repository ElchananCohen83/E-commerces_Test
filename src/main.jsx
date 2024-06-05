import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CartProvider from './context/CartContextProducts.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
)
