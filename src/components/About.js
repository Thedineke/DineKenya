import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/about.css';
function About() {
  // const description= '';
  //    const [ moreAbout,setMoreAbout]=  useState(false);
    
  //    function handleAbout () {
  //     setMoreAbout(!moreAbout)
  //    }
  
  return (
    <div className='container bg-gray-400 mt-3'>
  <div className=' about flex items-center space-x-7'>
    <div className="image-row m-4">
      <img src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Image 1" className="image" />
      <img src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Image 2" className="image2" />
      <img src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Image 2" className="image" />
    </div>
    <div className='definition m-8 flex flex-col items-center text-center justify-center'>
      <h1 className='text-4xl text-black font-extrabold m-2'>OUR STORY</h1>
      <hr />
      <div>
        <p className='text-black font-bold text-md  md:text-sm md:text-center'>
          We’ve trained a model called ChatGPT which interacts in a conversational way. <br/>The dialogue format makes it possible for ChatGPT to answer questions, admit its mistakes, challenge incorrect premises, <br/>and reject inappropriate requests. ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction<br/> in a prompt and provide a response.
        </p>
      </div>
    </div>
  </div>
  {/* <button onClick={handleAbout}>
    Read { moreAbout ? 'Less' : 'More'}
  </button>
  { moreAbout && <p> {description} </p>} */}
</div>

  )
}

export default About