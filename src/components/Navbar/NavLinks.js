import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const [top, setTop] = useState(!window.scrollY);

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center gap-4 rounded-md px-6 py-2 ${top ? 'bg-red' : 'bg-white'}`}>
            <HashLink className={`font-extrabold ${top ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-red'}`} smooth to="/">
                Home
            </HashLink>
            <HashLink className={`font-extrabold ${top ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-red'}`} smooth to="/#services">
                Services
            </HashLink>
            <HashLink className={`font-extrabold ${top ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-red'}`} to="/#gallery">
                Gallery
            </HashLink>
            <HashLink className={`px-4 py-2 shadow-xl rounded-xl transition-all duration-300 ease-in-out ${top ? 'text-red bg-white hover:bg-gray-300' : 'text-white bg-red hover:bg-darkest'}`} to="/contact#contact">
                Contact Us
            </HashLink>
        </div>
    )
}

export default NavLinks;
