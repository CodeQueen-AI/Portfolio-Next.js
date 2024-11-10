"use client";
import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import ResponsiveMenu from './Responsive'; 

const NavbarMenu = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'About', link: '/' },
    { id: 3, title: 'Skill', link: '/' },
    { id: 4, title: 'My Journey', link: '/' },
    { id: 5, title: 'Projects', link: '/' },
    { id: 5, title: 'Contacts', link: '/' },
];

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open); 
    };

    return (
        <nav>
            <div className='container flex justify-between items-center py-4 md:pt-4'>
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-blue-700'>My</p>
                    <p className='text-blue-950'>Studio</p>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6 text-blue-500'>
                        {NavbarMenu.map((menu) => (
                            <li key={menu.id}>
                                <a
                                    href={menu.link}
                                    className='inline-block py-1 px-3 hover:text-primary font-semibold hover:underline'>
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:hidden'>
                    <MdMenu className='text-4xl cursor-pointer' onClick={toggleMenu} />
                </div>
            </div>
            <ResponsiveMenu open={open} toggleMenu={toggleMenu} />
        </nav>
    );
}

export default Navbar;
