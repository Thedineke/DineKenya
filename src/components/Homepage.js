import React, { useState } from 'react'
import pic from '../images/img.png'
//import { Link } from 'react-router-dom'
import '../Styles/Page.css'
import Backdrop from './Backdrop';
import Modal from './Modal';
function Homepage(props) {
  const [ modalIsOpen, setModalIsOpen] = useState(false);
  
  function bookHandler(){
     setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false);
  }
  return (
        <div className='Home   animate__fadeInDown animate__dela-3s'>
            <div className='items'>
              <h1 >
                <img src={pic}/>
                
             <button className='btn' onClick={bookHandler}>
                Book a Table
              </button>
             
              </h1>
 </div>
          
          {modalIsOpen && <Modal onClick={closeModal}/>   }
           {modalIsOpen && <Backdrop onClick={closeModal}  />}
        </div>
    )
}

export default Homepage