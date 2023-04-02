
import React, { useRef } from 'react';
import '../Styles/Modal.css';
import emailjs from 'emailjs-com';

function Modal(props) {
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_oxml60h', 'template_6k141xm', formRef.current," 2alT2f0OZ7HHrJiwP")      .then((result) => {
          console.log(result.text);
          alert('Your reservation request has been sent!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the reservation request. Please try again.');
      });

    formRef.current.reset();
  };

  return (
    // ... (the rest of your Modal component)
    <div className=' modal'>
      
      <div className='modal-content'>
      <button className='btnn' onClick={props.onClick}>X</button>
    <form className='container' onSubmit={handleSubmit} ref={formRef}>
    <div className="grid gap-6 mb-3 md:grid-cols-2">

<div>
    <label  name='first_name' for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
</div>
<div>
    <label name="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
</div>
<div class="mb-6">
<label name="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
<input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
</div>  
<div>
    <label name="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
</div>
<div>
<label name="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Adults</label>
    <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
</div>
<div>
    <label name="visitor2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Kids(if any)</label>
    <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
   
</div>

<div class="relative max-w-sm">
<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
</div>
<input datepicker datepicker-autohide type="text" name="Arrival Date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input date"/>

</div>
<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
</div>
<input datepicker datepicker-autohide type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" departure date"/>


</div>
<div>

<label name="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" className=" w-100 block p-2.5 w-48 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

</div>

      <button type="submit" className="text-white bg-blue-700 mt-3 w-100 hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
    </div>
    </div>
  );
}

export default Modal;
