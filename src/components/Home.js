import React from 'react'
import About from './About'
import Categories from './Categories'
import Contents from './Contents'
import Footer from './Footer'
import Gallery from './Gallery'
import Homepage from './Homepage'
import Team from './Team'


function Home() {
  return (
    <div>
    
       <div>
          <Homepage/>
       </div>
       
       <div>
        <About/>
       </div>
       
       <div>
        <Categories/>
       </div>
       <div>
       <Contents/>
       </div>
       <div>
          <Team/>
       </div>
       <div>
        <Gallery/>
       </div>

       <div>
           <Footer/>
       </div>
    </div>
  )
}

export default Home
