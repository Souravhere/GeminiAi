import React from 'react';
import { FaRegUser, FaCode, FaRegLightbulb } from "react-icons/fa";
import { CiLocationOn, CiChat2,  CiMicrophoneOn, CiLocationArrow1 } from "react-icons/ci";
import { BiImageAdd } from "react-icons/bi";

const Main = () => {
  return (
    <div className='sm:mx-20 relative mx-8 w-full overflow-x-hidden text-gray-400'>
      <div className='w-full flex items-center justify-between mt-3'>
        <p className='text-xl'>Gemini</p>
        <FaRegUser size={"1.4em"}  />
      </div>
      <div className='mt-20 '>
        <h1 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-600'>Hello Dev ,</h1>
        <h3 className='text-xl'>How can I help you Today ?</h3>
      </div>
      <div className='w-full flex items-center justify-between mt-6 flex-warp gap-3 sm:overflow-x-hidden overflow-x-scroll'>
        <div className='w-48 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer'>
          <p className='text-xs'>Please provide a brief summary on the concept of urban society</p>
          <FaRegLightbulb size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]'/>
        </div>
        <div className='w-48 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer'>
          <p className='text-xs'>How do you implement a binary search algorithm in Python?</p>
          <FaCode size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]'/>
        </div>
        <div className='w-48 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer'>
          <p className='text-xs'>Suggest beautiful destinations for my upcoming road trip</p>
          <CiLocationOn size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]'/>
        </div>
        <div className='w-48 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer'>
          <p className='text-xs'>Describe the benefits of using AI in everyday life.</p>
          <CiChat2 size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]'/>
        </div>
      </div>
      {/* main input */}
      <div className='absolute w-full bottom-0 left-0'>
        <div className='flex items-center gap-2 border border-blue-300 sm:w-[70%] w-full mx-auto p-2 rounded-full'>
          <input
          type="text" 
          name="" 
          id="" 
          placeholder='Message Gemini'
          className='bg-transparent w-[80%] px-4 outline-none'
          />
          <abbr title="This feature is Unavailable">
          <BiImageAdd size={"1.5em"} className='cursor-pointer' />
          </abbr>
          <abbr title="This feature is Unavailable">
          <CiMicrophoneOn size={"1.5em"} className='cursor-pointer' />
          </abbr>
          <CiLocationArrow1 size={"2em"} />
        </div>
        <p className='text-center my-2 text-gray-500 text-xs'>Gemini can make mistakes. Check important info.</p>
      </div>
    </div>
  )
}
// AIzaSyAd9pYcc6KEXw-IXD0PeLwkvK7NWbqFUio

export default Main
