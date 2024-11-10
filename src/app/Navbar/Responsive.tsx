import React from 'react';

interface ResponsiveMenuProps {
    open: boolean;
    toggleMenu: () => void;
}
const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open, toggleMenu }) => {
    return (
        <div
            className={`absolute top-20 left-0 w-full h-screen z-20 bg-black bg-opacity-50 transition-all ${open ? 'block' : 'hidden'}`}>
            <div
                className='text-xl font-semibold uppercase bg-blue-800 text-white py-10 m-6 rounded-3xl'>
                <ul className='flex flex-col items-center gap-10'>
                    <li><a href="/" onClick={toggleMenu}>Home</a></li>
                    <li><a href="/" onClick={toggleMenu}>About</a></li>
                    <li><a href="/" onClick={toggleMenu}>Skill</a></li>
                    <li><a href="/" onClick={toggleMenu}>My Journey</a></li>
                    <li><a href="/" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="/" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default ResponsiveMenu;
