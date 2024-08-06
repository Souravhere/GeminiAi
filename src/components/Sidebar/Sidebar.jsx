import React, { useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { CiCirclePlus, CiSettings, CiCircleInfo, CiChat1 } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {

  const [extended, setextended] = useState(false)

  return (
    <div className='fixed top-0 left-0 bg-slate-800/90 h-screen min-w-16 max-w-fit'>
      {/* Menu button */}
      <div onClick={()=> setextended(prev => !prev)}>
        {extended ?
        <>
      <div>
        <IoMdClose size={"2em"} className='bg-slate-500 fixed top-3 left-3 z-50 p-2 rounded-full mx-auto mt-3 hover:cursor-pointer'/>
      </div>
      
        </>
        :
        <RiMenu2Fill  size={"2em"} className='bg-slate-500 fixed top-3 left-3 z-50 p-2 rounded-full mx-auto mt-3 hover:cursor-pointer'/>
        }
      
      {/* new chat */}
        <div className='flex items-center justify-evenly mt-3 hover:bg-slate-500 duration-500'>
        <CiCirclePlus size={"2.5em"} />
        {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? <div className='block items-center justify-evenly rounded-full mx-2 mt-2 hover:cursor-pointer'>
          <div className='flex items-center justify-evenly mt-2 bg-slate-700 rounded-lg p-[2px] gap-1'>
            <CiChat1 size={"2em"}/>
            {extended ?  <p>What is react....</p> : null}
          </div>
        </div> : null}
      </div>
      {/* BOTTOM div */}
      <div className='absolute bottom-0 left-0 p-3'>
      <div className='flex items-center justify-evenly mt-2 rounded-lg p-[2px] gap-1 hover:cursor-pointer hover:bg-slate-500 duration-500'>
        <CiSettings size={"2em"}/>
        {extended ?  <p>Setting</p> : null}
      </div>
      <div className='flex items-center justify-evenly mt-2 rounded-lg p-[2px] gap-1 hover:cursor-pointer hover:bg-slate-500 duration-500'>
        <VscAccount size={"1.6em"}/>
        {extended ?  <p>Account</p> : null}
      </div>
      <div className='flex items-center justify-evenly mt-2 rounded-lg p-[2px] gap-1 hover:cursor-pointer hover:bg-slate-500 duration-500'>
        <CiCircleInfo size={"2em"}/>
        {extended ?  <p>About</p> : null}
      </div>
      </div>
    </div>
  )
}

export default Sidebar
