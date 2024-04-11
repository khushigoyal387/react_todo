
import React, { useState } from 'react'
import Api from './Api'
import Header from './Header'
import Cart from './Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
    const [cartItems,setCartItems]=useState(localStorage? localStorage.getItem("item")
  ? JSON.parse(localStorage.getItem("item")) : [] : [])

  return (
    <div>
      
        <BrowserRouter>
        <Header cartItem={cartItems}  setCartItem={setCartItems}/>

          <Routes>
            <Route path="/" element={ <Api cartItem={cartItems}  setCartItem={setCartItems} />}></Route>
            <Route path="/cart" element={<Cart cart={cartItems}  setCartItem={setCartItems} />}></Route>
            
          </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
