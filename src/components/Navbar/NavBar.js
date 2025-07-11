import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
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
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top ? 'bg-white shadow-lg text-black' : 'bg-red shadow-lg text-white'}`}>
            <div className="flex flex-row justify-between items-center py-2">
                <div className="flex item-center md:px-12 md:mx-12 font-semibold">
                    <HashLink smooth to="/#hero" className='flex items-center'>
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="0.029 0 295.971 451" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296 451" height="40" width="40" data-type="ugc" role="presentation" aria-hidden="true" aria-label="" className='h-10 w-auto mr-2'>
                            <g>
                                <mask fill="#ffffff" id="a0f712be-6d68-47c9-8466-6c2d2131e686_comp-kbanqr04">
                                    <path d="m81 431.5 7 19.5-5-3-5-3.5-2.75-2-2.75-2L68 437l-9-7-8.5-8-4.25-4.25L43 414.5l-5-5.5-3.5-4-6-8-5.5-8-5-8.5-2.54-4.318a61.03 61.03 0 0 1-4.228-8.7L8.5 360.5l-2-5L5 350l-2-7.5-1.5-7.5-1-12-.456-9.121c-.03-.585-.016-1.172.04-1.755L1.5 297.5l2.5-13L8.5 269l4.5-11 9.5-19L35 219.5 46.5 205 58 192.5 84 167l21.5-22.5 14-17 18-25 8-13.5 6.5-13.5 3.5-10.5.296-1.48A61.978 61.978 0 0 0 157 51.36V50l-.586-7.62a64.05 64.05 0 0 0-1.723-10.614l-.869-3.478a45.945 45.945 0 0 0-3.844-10.121L140.5 0 152 7.5 169.5 21 187 38l6.75 8 6.75 8 6.5 9.5 6.5 10L218 81l4 8 3.5 7 3 7.5 3.5 8.5 4.5 15.5 3.5 15 2.5 14.5 1.5 21-.5 16.5-2 17.5-1.5 11-5 21-4 12.5-4 10-6.5 15.5-7 12.5 6.5-4.5 7.781-7.469a87.219 87.219 0 0 0 8.708-9.716l1.011-1.315 2.5-3.5 2-3 5.5-9.5 4-9 3.5-12 1.5-8.5 7 8.5 7 9.5 6 9.5L282 264l5.5 14 4.5 15 2.5 11 1.5 16-.5 19-2 13.5-1 6.5-2 7-2.5 6.5-4.5 12-2.5 4.5-6.5 11.5L266 413l-8.5 10-9 9.5-12 10.5-6 4.5-5.5 3 .5-9v-9.086c0-3.604-.282-7.202-.844-10.762L224 417.5l-3-10-3-7.5-7-11.5-4.5-5.5-3.5-3.5v9l-.25 2.5-.25 2.5-1 5-2.5 7.5-1.85 4.317a35.953 35.953 0 0 1-2.717 5.146L192.5 418.5l-4 5-3.331 3.608a32.993 32.993 0 0 1-5.943 5.075L176.5 434l2-7 .75-2.75.75-2.75.75-3.75.75-3.75.5-5.5v-9l-.25-5-.25-5-.5-4.75-1-4.75a32.995 32.995 0 0 0-1.378-4.894L174 362.5l-7-13.5-6.5-12.5L155 324l-3.5-12-1.194-7.163A96.029 96.029 0 0 1 149 289.055V282.5l.5-11 1.5-12-14.328 9.919a83.033 83.033 0 0 0-9.745 7.9l-9.565 9.033a64.075 64.075 0 0 0-7.07 7.882L101 306.5l-8 14-4.894 10.076a86.998 86.998 0 0 0-5.752 15.393l-2.173 8.073a126.004 126.004 0 0 0-3.707 20.219L76 379v24l1.5 14 3.5 14.5Z"></path>
                                </mask>
                                <path mask="url(#a0f712be-6d68-47c9-8466-6c2d2131e686_comp-kbanqr04)" strokeWidth="2" stroke="#000000" fill="url(#fff94cb7-3333-4e7a-8ace-7b219e3db58e_comp-kbanqr04)" d="m81 431.5 7 19.5-5-3-5-3.5-2.75-2-2.75-2L68 437l-9-7-8.5-8-4.25-4.25L43 414.5l-5-5.5-3.5-4-6-8-5.5-8-5-8.5-2.54-4.318a61.03 61.03 0 0 1-4.228-8.7L8.5 360.5l-2-5L5 350l-2-7.5-1.5-7.5-1-12-.456-9.121c-.03-.585-.016-1.172.04-1.755L1.5 297.5l2.5-13L8.5 269l4.5-11 9.5-19L35 219.5 46.5 205 58 192.5 84 167l21.5-22.5 14-17 18-25 8-13.5 6.5-13.5 3.5-10.5.296-1.48A61.978 61.978 0 0 0 157 51.36V50l-.586-7.62a64.05 64.05 0 0 0-1.723-10.614l-.869-3.478a45.945 45.945 0 0 0-3.844-10.121L140.5 0 152 7.5 169.5 21 187 38l6.75 8 6.75 8 6.5 9.5 6.5 10L218 81l4 8 3.5 7 3 7.5 3.5 8.5 4.5 15.5 3.5 15 2.5 14.5 1.5 21-.5 16.5-2 17.5-1.5 11-5 21-4 12.5-4 10-6.5 15.5-7 12.5 6.5-4.5 7.781-7.469a87.219 87.219 0 0 0 8.708-9.716l1.011-1.315 2.5-3.5 2-3 5.5-9.5 4-9 3.5-12 1.5-8.5 7 8.5 7 9.5 6 9.5L282 264l5.5 14 4.5 15 2.5 11 1.5 16-.5 19-2 13.5-1 6.5-2 7-2.5 6.5-4.5 12-2.5 4.5-6.5 11.5L266 413l-8.5 10-9 9.5-12 10.5-6 4.5-5.5 3 .5-9v-9.086c0-3.604-.282-7.202-.844-10.762L224 417.5l-3-10-3-7.5-7-11.5-4.5-5.5-3.5-3.5v9l-.25 2.5-.25 2.5-1 5-2.5 7.5-1.85 4.317a35.953 35.953 0 0 1-2.717 5.146L192.5 418.5l-4 5-3.331 3.608a32.993 32.993 0 0 1-5.943 5.075L176.5 434l2-7 .75-2.75.75-2.75.75-3.75.75-3.75.5-5.5v-9l-.25-5-.25-5-.5-4.75-1-4.75a32.995 32.995 0 0 0-1.378-4.894L174 362.5l-7-13.5-6.5-12.5L155 324l-3.5-12-1.194-7.163A96.029 96.029 0 0 1 149 289.055V282.5l.5-11 1.5-12-14.328 9.919a83.033 83.033 0 0 0-9.745 7.9l-9.565 9.033a64.075 64.075 0 0 0-7.07 7.882L101 306.5l-8 14-4.894 10.076a86.998 86.998 0 0 0-5.752 15.393l-2.173 8.073a126.004 126.004 0 0 0-3.707 20.219L76 379v24l1.5 14 3.5 14.5Z"></path>
                                <defs fill="none">
                                    <linearGradient gradientUnits="userSpaceOnUse" y2="451" x2="228.5" y1="225" x1="129.5" id="fff94cb7-3333-4e7a-8ace-7b219e3db58e_comp-kbanqr04">
                                        <stop stopColor="#EC6E00"></stop>
                                        <stop stopColor="#F9F753" offset="1"></stop>
                                    </linearGradient>
                                </defs>
                            </g>
                        </svg>
                    <h1 className={`font-extrabold text-3xl md:text-4xl lg:text-5xl ${top ? 'text-white' : 'text-[#1F2D33]'}`}> Ewing Gas Piping LLC</h1>                    
                    </HashLink>
                </div>
                <div className="group flex flex-col items-center">
                <button className={`p-2 rounded-lg lg:hidden ${!top ? 'text-red' : 'text-white'}`} onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className='hidden space-x-6 lg:inline-block p-5'>
                        <NavLinks />
                    </div>

                    <div className={`fixed transition-transform duration-300 ease-in-out flex justify-end right-0 top-8 w-72 h-auto rounded-md py-6 lg:hidden  ${isOpen ? "block" : "hidden"}`}>
                        <div className='flex flex-col space-y-3'>
                            <NavLinks />
                        </div>                                                
                    </div>

                </div>
            </div>
        </nav>
    )
    
}


export default NavBar;
