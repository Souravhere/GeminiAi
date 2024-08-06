import React, { useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { CiCirclePlus, CiSettings, CiCircleInfo, CiChat1 } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const [extended, setextended] = useState(false);

  return ( 
    <div className=''>
      {/* fixed top-0 left-0 bg-slate-800/90 h-screen z-40 min-w-16 max-w-fit sm:ml-0 */}
      {/* Menu button */}
      <div onClick={() => setextended(prev => !prev)}>
        {extended ? (
          <>
            <div>
              <IoMdClose size={"2em"} className='bg-slate-500 fixed top-3 left-4 z-50 p-2 rounded-full mx-auto mt-3 hover:cursor-pointer' />
            </div>
            <div className='absolute sm:w-1/4 w-1/2 h-screen bg-slate-800 top-0 left-0 p-3 z-40'>
              <div>
                {/* new chat */}
                <div className='flex items-center justify-evenly bg-slate-700 p-1 rounded-full hover:bg-slate-500 duration-500 mt-16  hover:cursor-pointer'>
                  <CiCirclePlus size={"2.5em"} />
                  {extended && <p>New Chat</p>}
                </div>
                {extended && (
                  <div className='block mt-2 hover:cursor-pointer'>
                    <div className='flex items-center justify-evenly bg-slate-700 p-2 rounded-full hover:bg-slate-500 duration-500'>
                      <CiChat1 size={"2em"} />
                      <p>What is react....</p>
                    </div>
                  </div>
                )}
              </div>
              {/* BOTTOM div */}
              <div className='bottom-0 w-full mt-[90%]'>
                <div className='flex items-center justify-evenly bg-slate-700 p-1 rounded-full hover:bg-slate-500 duration-500 mx-auto hover:cursor-not-allowed'>
                  <CiSettings size={"2em"} />
                  {extended && <p>Setting</p>}
                </div>
                <div className='flex items-center justify-evenly bg-slate-700 p-1 rounded-full hover:bg-slate-500 duration-500 mt-2 hover:cursor-not-allowed'>
                  <VscAccount size={"1.6em"} />
                  {extended && <p>Account</p>}
                </div>
                <div className='flex items-center justify-evenly bg-slate-700 p-1 rounded-full hover:bg-slate-500 duration-500 mt-2 hover:cursor-not-allowed'>
                  <CiCircleInfo size={"2em"} />
                  {extended && <p>About</p>}
                </div>
              </div>
            </div>
          </>
        ) : (
          <RiMenu2Fill size={"2em"} className='bg-slate-500 fixed top-3 left-4 z-50 p-2 rounded-full mx-auto mt-3 hover:cursor-pointer' />
        )}
      </div>
    </div>
  );
}

export default Sidebar;
