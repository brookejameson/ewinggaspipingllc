import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }


    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <>
            <HashLink className={`px-4 font-extrabold ${top ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-red'} hover:text-red`} smooth to="/">
                Home
            </HashLink>
            <HashLink className={`px-4 font-extrabold ${top ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-red'} hover:text-red`} smooth to="/#services">
                Services
            </HashLink>
            <HashLink className={`px-4 font-extrabold ${top ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-red'} `} to="/#gallery">
                Gallery
            </HashLink>
            <HashLink className={`inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl transition-all duration-300 ease-in-out ${top ? 'text-red bg-white hover:bg-gray-300' : 'text-white bg-red hover:bg-darkest'}`} to="/contact#contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;
