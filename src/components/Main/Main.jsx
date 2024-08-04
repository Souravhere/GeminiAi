import React from 'react';
import { FaRegUser, FaCode } from "react-icons/fa";

const Main = () => {
  return (
    <div className='sm:mx-20 mx-8 w-full overflow-x-hidden text-gray-400'>
      <div className='w-full flex items-center justify-between mt-3'>
        <p className='text-xl'>Gemini</p>
        <FaRegUser size={"1.4em"}  />
      </div>
      <div className='mt-20 '>
        <h1 className='text-3xl font-semibold'>Hello Dev ,</h1>
        <h3 className='text-xl'>How can I help you Today ?</h3>
      </div>
      <div className='w-full flex items-center justify-between mt-6 flex-warp gap-3 sm:overflow-x-hidden overflow-x-scroll'>
        <div className='w-48 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer'>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni laudantium voluptatum quas saepe mollitia.</p>
          <FaCode size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]'/>
        </div>
        <div className='w-48 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer'>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni laudantium voluptatum quas saepe mollitia.</p>
          <FaCode size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]'/>
        </div>
        <div className='w-48 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer'>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni laudantium voluptatum quas saepe mollitia.</p>
          <FaCode size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]'/>
        </div>
        <div className='w-48 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer'>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni laudantium voluptatum quas saepe mollitia.</p>
          <FaCode size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]'/>
        </div>
      </div>
    </div>
  )
}

export default Main
