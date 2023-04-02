import React from 'react'
import NavBar from './components/NavBa';
import UpperNav from './components/UpperNav';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Book from './components/Book';
import NotFound from './components/NotFound';
import APage from './components/APage';

function MainNavigation() {
  return (
    <div>


        <UpperNav/>
        <NavBar/>
         <Routes>
          
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<APage/>}/>
                  <Route path='/menu' element={<Menu/>}/>
                  <Route path='/Gallery' element={<Gallery/>}/>
                   <Route path='/Book' element={<Book/>}/>
                   
            </Routes>
    </div>
  )
}

export default MainNavigation