import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { MdEmojiEvents, MdOutlineVideoStable, MdLiveHelp, MdClose } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';

const menuItems = [
    { icon: <FaHome />, label: 'Home', path: '/' },
    { icon: <MdEmojiEvents />, label: 'Events', path: '/Events' },
    { icon: <MdOutlineVideoStable />, label: 'Video', path: '/Video' },
    { icon: <MdLiveHelp />, label: 'Live', path: '/Live' },
    { icon: <IoPersonAddSharp />, label: 'Register', path: '/Register' },
];

const Nav = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
          
    };
    const closeMenu =()=>{
        setOpen(false)
    }

    return (
       
            <nav className='p-4 bg-slate-500 relative w-full flex items-center justify-between'>
                <ul className="hidden absolute items-center gap-4 md:flex">
                    {menuItems.map((item, index) => (
                        <li key={index} className='flex items-center gap-2 font-bold text-slate-100 cursor-pointer hover:text-slate-300 '>
                            <Link to={item.path} className='flex items-center gap-2'>
                                {item.icon} {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='md:hidden'>
                    <button className='text-slate-200 cursor-pointer' onClick={toggle}>
                        {open ? <MdClose /> : <CiMenuFries />}
                    </button>
                </div>
                {open && (
                    <ul className="flex flex-col items-center gap-4 mt-4 md:hidden">
                        {menuItems.map((item, index) => (
                            <li key={index} className='flex items-center gap-2 font-bold text-slate-100 cursor-pointer hover:text-slate-300'>
                                <Link to={item.path} className='flex items-center gap-2' onClick={closeMenu}>
                                    {item.icon} {item.label} 
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        
    );
};

export default Nav;
