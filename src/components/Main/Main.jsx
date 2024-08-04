import React from 'react';
import { FaRegUser, FaCode } from "react-icons/fa";

const Main = () => {
  return (
    <div className='sm:mx-20 mx-8 w-full overflow-x-hidden'>
      <div className='w-full flex items-center justify-between mt-3'>
        <p className='text-xl'>Gemini</p>
        <FaRegUser size={"1.4em"}  />
      </div>
      <div className='w-full flex items-center justify-between mt-6 flex-warp gap-3'>
        <div className='w-44 bg-gray-600 p-2 rounded-lg shrink-0'>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni laudantium voluptatum quas saepe mollitia.</p>
          <FaCode size={"1.5em"} className='bg-gray-400 p-1 rounded-full '/>
        </div>
        <div className='w-44 bg-gray-600 p-2 rounded-lg shrink-0'>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni laudantium voluptatum quas saepe mollitia.</p>
          <FaCode size={"1.5em"} className='bg-gray-400 p-1 rounded-full '/>
        </div>
        <div className='w-44 bg-gray-600 p-2 rounded-lg shrink-0'>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni laudantium voluptatum quas saepe mollitia.</p>
          <FaCode size={"1.5em"} className='bg-gray-400 p-1 rounded-full '/>
        </div>
        <div className='w-44 bg-gray-600 p-2 rounded-lg shrink-0'>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni laudantium voluptatum quas saepe mollitia.</p>
          <FaCode size={"1.5em"} className='bg-gray-400 p-1 rounded-full '/>
        </div>
      </div>
    </div>
  )
}

export default Main
