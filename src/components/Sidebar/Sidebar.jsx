import React from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 bg-slate-600 h-screen w-14 overflow-x-hidden'>
      {/* TOP div */}
      <div>
      <RiMenu2Fill size={"2em"} className='bg-slate-500 p-2 rounded-full mx-auto mt-3'/>
      {/* new chat */}
        <div className='flex items-center justify-evenly rounded-full mx-2 mt-2'>
          <CiCirclePlus size={"2em"} />
          {/* <p>New Chat</p> */}
        </div>
      </div>
      {/* BOTTOM div */}
      <div></div>
    </div>
  )
}

export default Sidebar
