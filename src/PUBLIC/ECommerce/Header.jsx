
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const Header = ({cartItem , setCartItem}) => {
  return (
    <div>
      <div className='navbar'>
        <div className='logo'><h1>ECOMMERCE</h1></div>
        <div className='header'>
          <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">SHOP</a></li>
            <li><a href="">FOR-MEN'S</a></li>
            <li><a href="">FOR-WOMEN'S</a></li>
           <Link to={"/cart"}> <li><ShoppingCartIcon/><span>{cartItem?.length}</span></li></Link>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
