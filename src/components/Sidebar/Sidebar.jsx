import React from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { CiCirclePlus, CiSettings, CiCircleInfo, CiChat1 } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 bg-slate-800/90 h-screen w-fit'>
      {/* TOP div */}
      <div>
      <RiMenu2Fill size={"2em"} className='bg-slate-500 p-2 rounded-full mx-auto mt-3 hover:cursor-pointer'/>
      {/* new chat */}
        <div className='block items-center justify-evenly rounded-full mx-2 mt-2 hover:cursor-pointer'>
          <CiCirclePlus size={"2.5em"} />
          <div className='flex items-center justify-evenly mt-2 bg-slate-700 rounded-lg p-[2px] gap-1'>
            <CiChat1 size={"2em"}/>
            <p>What is react....</p>
          </div>
        </div>
      </div>
      {/* BOTTOM div */}
      <div className='absolute bottom-0 left-0 p-3'>
      <div className='flex items-center justify-between mt-2 rounded-lg p-[2px] gap-1 hover:cursor-pointer'>
        <CiSettings size={"2em"}/>
        <p>Setting</p>
      </div>
      <div className='flex items-center justify-between mt-2 rounded-lg p-[2px] gap-1 hover:cursor-pointer'>
        <VscAccount size={"1.6em"}/>
        <p>Account</p>
      </div>
      <div className='flex items-center justify-between mt-2 rounded-lg p-[2px] gap-1 hover:cursor-pointer'>
        <CiCircleInfo size={"2em"}/>
        <p>About</p>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
