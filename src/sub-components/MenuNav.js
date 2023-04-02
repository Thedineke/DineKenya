import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Breakfast from './Breakfast'
import Sandwich from './Sandwich'
import NotFound from '../components/NotFound'
import ItalianDish from './ItalianDish'
function MenuNav() {
  return (
    <div>
        
        <Routes>
            <Route path='/Breakfast' element={<Breakfast/>}/>
            <Route path='/sandwinch' element={<Sandwich/>}/>
            <Route path='/ItalianDish' element= {<ItalianDish/>}/>
        </Routes>
    </div>
  )
}

export default MenuNav