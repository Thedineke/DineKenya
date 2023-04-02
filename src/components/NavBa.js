import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';
function NavBar() {

  const [active, setActive]= useState(false);

   function handleActive (){
      setActive(!active)
   }
  return  (
    <nav>
    <div class="logo">
       <Link to={'/'}>
        
             DINE KENYA
        </Link>
    </div>
    <input type="checkbox" id="click"/>
    <label for="click" class="menu-btn">
    <i class="fas fa-bars"></i>
    </label>
    <ul className=''>
       <li className='active flex'>
         <li><Link to={'/'} onClick={handleActive} 
           className="active"
        >Home</Link></li>
       <li><Link to={'/about'}>About</Link></li>
       <li><Link to={'/menu'}>Menu</Link></li>
       <li><Link to={'/Gallery'}>Gallery</Link></li>
       <li><Link to={'/Book'}>BOOK NOW</Link></li>
       </li>
      
    </ul>
 </nav>
  )
}

export default NavBar