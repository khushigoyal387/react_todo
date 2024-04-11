
// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import './Ecomerce.css'
// function Api({cartItem , setCartItem}) {

//   const [Data, setData] = useState()
//   const [icon, setIcon] = useState(true)

//   const changename = (id) => {
//     console.log(id)
//     // const filterData = Data?.filter((item) => item?.id === id)
//     // console.log(filterData, "11")
//    Data?.map((item)=>{
//     if(item?.id === id){
//       setCartItem([...cartItem,item])
      
//     }
//    })
//   };

//   function fetchdata() {
//     axios.get('https://fakestoreapi.com/products')
//       .then(function (response) {
//         setData(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//   }

//   console.log(Data)

  
//   useEffect(() => {
//     fetchdata()
//   }, [])
//   return (
//     <div>


//       <div className='products'>

//         <ul className='product'>
//           {Data?.map((item) => (
//             <div className='discription' key={item.id}>
//               <li className='image' ><img src={item.image} alt="" /></li>
//               <li >{item.category}</li>
//               <li className='title'>{item.title}</li>
//               <li >${item.price}</li>
//               <button onClick={(() => { changename(item.id) })}>{icon ? "Add to cart" : "Remove from cart"}</button>
//             </div>
//           ))}

//         </ul>


//       </div>


//     </div>
//   )
// }
// export default Api


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ecomerce.css';

function Api({ cartItem, setCartItem }) {
  const [data, setData] = useState([]);

  function fetchData() {
    axios.get('https://fakestoreapi.com/products')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (id) => {
    const selectedItem = data.find(item => item.id === id);
    setCartItem(prevCartItems => [...prevCartItems, selectedItem]);
  };

  const removeFromCart = (id) => {
    setCartItem(prevCartItems => prevCartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <div className='products'>
        <ul className='product'>
          {data.map((item) => (
            <div className='discription' key={item.id}>
              <li className='image'><img src={item.image} alt="" /></li>
              <li>{item.category}</li>
              <li className='title'>{item.title}</li>
              <li>${item.price}</li>
              {cartItem.some(cartItem => cartItem.id === item.id) ? (
                <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
              ) : (
                <button onClick={() => addToCart(item.id)}>Add to cart</button>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Api;
