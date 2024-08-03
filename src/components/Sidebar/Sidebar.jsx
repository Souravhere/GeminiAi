import React from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { CiCirclePlus, CiSettings, CiCircleInfo } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 bg-slate-800/90 h-screen w-14 overflow-x-hidden'>
      {/* TOP div */}
      <div>
      <RiMenu2Fill size={"2em"} className='bg-slate-500 p-2 rounded-full mx-auto mt-3 hover:cursor-pointer'/>
      {/* new chat */}
        <div className='flex items-center justify-evenly rounded-full mx-2 mt-2 hover:cursor-pointer'>
          <CiCirclePlus size={"3em"} />
          {/* <p>New Chat</p> */}
        </div>
      </div>
      {/* BOTTOM div */}
      <div className='absolute bottom-0 left-0 p-3'>
      <CiSettings size={"2em"} className='hover:cursor-pointer' />
      <CiCircleInfo size={"2em"} className='mx-auto mt-3 hover:cursor-pointer' />
      <VscAccount size={"1.7em"} className='mx-auto mt-3 hover:cursor-pointer'/>
      </div>
    </div>
  )
}

export default Sidebar
