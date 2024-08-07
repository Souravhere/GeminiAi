import React, { useContext } from 'react';
import { FaRegUser, FaCode, FaRegLightbulb } from "react-icons/fa";
import { CiLocationOn, CiChat2, CiMicrophoneOn, CiLocationArrow1 } from "react-icons/ci";
import { BiImageAdd } from "react-icons/bi";
import { Context } from '../../Context/Context';
import { SiGooglegemini } from "react-icons/si";

const Main = () => {
  const { onSent, input, recentPrompt, showResult, loading, setinput, resultData } = useContext(Context);

  const handleClick = () => {
    if (input.trim()) {
      onSent(input);
    }
  };

  return (
    <div className='sm:mx-20 relative mx-8 w-full text-gray-400 mt-3'>
      <div className='w-full fixed top-0 left-0 flex items-center justify-between mt-3 p-3'>
        <p className='text-xl sm:pl-0 ml-12 font-semibold'>Gemini</p>
        <FaRegUser size={"1.4em"} className='mr-6' />
      </div>

        {!showResult ? 
        <>
      <div className='mt-20 '>
        <h1 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-600'>Hello Dev,</h1>
        <h3 className='text-xl'>How can I help you Today?</h3>
      </div>
      <div className='w-full flex items-center justify-between mt-6 flex-wrap gap-3 sm:overflow-x-hidden overflow-x-scroll'>
        <div className='sm:w-48 w-80 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer sm:mx-0 mx-auto'>
          <p className='text-sm font-semibold'>Please provide a brief summary on the concept of urban society</p>
          <FaRegLightbulb size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]' />
        </div>
        <div className='sm:w-48 w-80 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer sm:mx-0 mx-auto'>
          <p className='text-sm font-semibold'>How do you implement a binary search algorithm in Python?</p>
          <FaCode size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]' />
        </div>
        <div className='sm:w-48 w-80 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer sm:mx-0 mx-auto'>
          <p className='text-sm font-semibold'>Suggest beautiful destinations for my upcoming road trip</p>
          <CiLocationOn size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]' />
        </div>
        <div className='sm:w-48 w-80 bg-gray-800 p-2 rounded-lg shrink-0 hover:bg-gray-900 duration-300 cursor-pointer sm:mx-0 mx-auto'>
          <p className='text-sm font-semibold'>Describe the benefits of using AI in everyday life.</p>
          <CiChat2 size={"1.5em"} className='bg-gray-700 p-1 rounded-full mt-2 ml-[85%]' />
        </div>
      </div>
        </> :
        <div className='p-2'>
          {/* this div for show the prompt and user icon */}
          <div  className='flex items-center justify-between mt-6'>
          <FaRegUser size={"1.3em"} />
            <p className='bg-gray-700 p-1 rounded-full px-2'>{recentPrompt}</p>
          </div>
          {/* this div for show the result by gemini api */}
          <div className='outputscroll flex items-start gap-3 overflow-y-scroll mb-28 bg-black'>
            {/* <SiGooglegemini size={"2em"}  /> */}
            <img className='w-6 h-6 mt-3' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" alt="Gemini logo" />
            {loading ? 
            <div class="w-full bg-transparent rounded-lg shadow-md p-4 animate-pulse">
            <div class="w-2/3 h-4 bg-gray-800 rounded mb-2"></div>
            <div class="w-full h-8 bg-gray-800 rounded mb-2"></div>
            <div class="w-full h-8 bg-gray-800 rounded mb-2"></div>
            <div class="w-1/2 h-8 bg-gray-800 rounded"></div>
          </div>
            :
            <p dangerouslySetInnerHTML={{__html:resultData}} className='mt-3'></p>
            }
          </div>
        </div>
      }
      {/* main input */}
      <div className='fixed w-full bottom-0 left-0 bg-black p-3'>
        <div className='flex items-center gap-2 border border-blue-300 sm:w-[70%] w-full mx-auto p-2 rounded-full'>
          <input
            type="text"
            placeholder='Message Gemini'
            className='bg-transparent w-[80%] px-4 outline-none'
            onChange={(e) => setinput(e.target.value)}
            value={input}
          />
          <abbr title="This feature is Unavailable">
            <BiImageAdd size={"1.5em"} className='cursor-pointer' />
          </abbr>
          <abbr title="This feature is Unavailable">
            <CiMicrophoneOn size={"1.5em"} className='cursor-pointer' />
          </abbr>
          <abbr title="Click to run the Prompt">
            <CiLocationArrow1
              size={"2em"}
              onClick={handleClick}
              className='hover:bg-slate-800 duration-300 p-1 rounded-full cursor-pointer'
            />
          </abbr>
        </div>
        <p className='text-center my-2 text-gray-500 text-xs'>Gemini can make mistakes. Check important info.</p>
      </div>
    </div>
  );
}

export default Main;
