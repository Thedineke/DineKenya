import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Show.css'
function MenuShow() {
  return (
    <div>
        
         <div className='Title m-1 flex flex-col items-center justify-center'>
            <h1 className='text-gray text-4xl m-2 font-extrabold	 '>All Day Menu</h1>
            <p className='text-gray  text-2xl m-2 font-bold '>Fresh, Healthy,Delicious !</p>
        </div>
        
        <div className='container flex items-center  flex-row'>
        
            <Link to={'/Breakfast'} className='break' >
               <h1 className='font-extrabold text-xl'> Breakfast</h1>  
            </Link> 
        <a href='/ItalianDish' className='break'><h1 className='font-extrabold text-xl'>italian</h1></a>
       <Link to={'/Sandwinch'} className='break'> <h1 className='font-extrabold text-xl' >breakfast</h1></Link>
      
        </div>
        </div>

  )
}

export default MenuShow