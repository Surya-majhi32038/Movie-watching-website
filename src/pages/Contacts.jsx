import React from 'react'
import { Form } from 'react-router-dom';


export const contactData = async({request})=>{
  try {
    const response = await request.formData();
    const data = Object.fromEntries(response);
    // data is very usefull becase it return a form all details 
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
    
};
const Contacts = () => {

  return (
    <div className="p-6  container min-h-screen flex    ">
      <Form
        method="POST"
        action="/contacts"
        noValidate=""
        className="container w-full max-w-xl h-[50%] my-auto p-8 mx-auto   space-y-6 rounded-md shadow bg-gray-300"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1 ">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            name="message"
            placeholder="Message..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 dark:bg-gray-100"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-600 focus:ring-violet-600 hover:ring-violet-600 text-gray-50"
          >
            Send
          </button>
        </div>
      </Form>
</div>
  )
}

export default Contacts;