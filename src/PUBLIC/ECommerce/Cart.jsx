
import React, { useEffect } from 'react'

const Cart = ({cart , setCart}) => {
  useEffect(() => {
    if (localStorage.getItem("item") !== undefined) {
      let cartlist = JSON.parse(localStorage.getItem("item"));
      cartlist = [...cart];
      
      localStorage.setItem("item", JSON.stringify(cartlist));
    } else if (cart.length > 0) {
      localStorage.setItem("item", JSON.stringify(cart));
    }
  }, [cart]);
  
  
    // console.log(cart ,"cart")
  return (
    <div >
<ul>
      {cart?.map((item) => (
            <div className='discription' key={item.id}>
              <li ><img src={item.image} alt="" /></li>
              <li >{item.category}</li>
              <li >{item.title}</li>
              <li >${item.price}</li>
              {/* <button onClick={(() => { changename(item.id) })}>{icon ? "Add to cart" : "Remove from cart"}</button> */}


            </div>
          ))}
          </ul>
    </div>

  )
}

export default Cart
