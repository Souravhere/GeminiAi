import React, { useState, useContext } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { CiCirclePlus, CiSettings, CiCircleInfo, CiChat1 } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { Context } from '../../Context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className=''>
      <div onClick={() => setExtended(prev => !prev)}>
        {extended ? (
          <>
            <div>
              <IoMdClose size={"2em"} className='bg-slate-700 fixed top-3 left-4 z-50 p-2 rounded-full mx-auto mt-3 hover:cursor-pointer' />
            </div>
            <div className='fixed sm:w-1/4 w-1/2 h-screen bg-slate-900 top-0 left-0 p-3 z-40'>
              <div>
                {/* new chat */}
                <div className='flex items-center justify-evenly bg-slate-800 p-1 rounded-full hover:bg-slate-700 duration-500 mt-16 hover:cursor-pointer'>
                  <CiCirclePlus size={"2.5em"} />
                  {extended && <p>New Chat</p>}
                </div>
                {extended && (
                  <>
                    <h2 className='pl-2 font-semibold mt-1'>Recent</h2>
                    <div className='block mt-2 hover:cursor-pointer h-72 overflow-y-scroll'>
                      {prevPrompts && prevPrompts.map((item, index) => (
                        <div key={index} onClick={() => loadPrompt(item)} className='flex items-center justify-evenly bg-slate-800 p-2 rounded-full hover:bg-slate-700 duration-500 my-2'>
                          <CiChat1 size={"2em"} />
                          <p>{item.slice(0, 15)}...</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              {/* BOTTOM div */}
              <div className='bottom-0 w-full'>
                <div className='flex items-center justify-evenly bg-slate-800 p-1 rounded-full hover:bg-slate-700 duration-500 mx-auto hover:cursor-not-allowed'>
                  <CiSettings size={"2em"} />
                  {extended && <p>Setting</p>}
                </div>
                <div className='flex items-center justify-evenly bg-slate-800 p-1 rounded-full hover:bg-slate-700 duration-500 mt-2 hover:cursor-not-allowed'>
                  <VscAccount size={"1.6em"} />
                  {extended && <p>Account</p>}
                </div>
                <div className='flex items-center justify-evenly bg-slate-800 p-1 rounded-full hover:bg-slate-700 duration-500 mt-2 hover:cursor-not-allowed'>
                  <CiCircleInfo size={"2em"} />
                  {extended && <p>About</p>}
                </div>
              </div>
            </div>
          </>
        ) : (
          <RiMenu2Fill size={"2em"} className='bg-slate-800 fixed top-3 left-4 z-50 p-2 rounded-full mx-auto mt-3 hover:cursor-pointer' />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
