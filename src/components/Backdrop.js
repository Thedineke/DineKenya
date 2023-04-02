import React from 'react'
import '../Styles/Backdrop.css'
function Backdrop(props) {
  return (
      <div className='backdrop' onClick={props.onClick}/>
    )
}

export default Backdrop