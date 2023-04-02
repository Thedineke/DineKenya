import React from 'react';
import '../Styles/dishes.css';

function Dishes() {
    const topProducts =[
        {
            Name:'French Food',
            Image:"https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 'Price in Ksh here',
            Description:'description here',
        },
        {
            Name:'French Food',
            Image:"https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 'Price in Ksh here',
            Description:'description here',
        },
        {
            Name:'French Food',
            Image:"https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 'Price in Ksh here',
            Description:'description here',
        },
    
    
     ];
  return (
   <div>
        <h1 className='heads'>Top Dishes 
          <p>These are top dishes on our Menu</p>
        </h1>
        <div className='Containe'>  
          {topProducts.map(( product,index) => (
            <div className="cards" key={index}>
              <div className="cardBody">
                <div className="img">
                  <img src={product.Image} alt={product.name}/>
                </div>
                <div className="details">
                  <h1>{product.name}</h1>
                  <h4>{product.price}</h4>
                  <p>{product.Description}</p>
                  <div className="button">
                    <div className="rating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <button> 
                      order Now
                    </button>
                  </div>
                </div>
              </div>
            </div> 
))}
        </div>
    </div>
  )
}

export default Dishes;
