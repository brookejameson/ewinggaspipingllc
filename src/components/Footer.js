import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200">

                        <div className="col-span-12 lg:col-span-4 lg:col-start-5 lg:col-end-9"> 
                            <div className="box-border border-b-4 border-red p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-96 mx-auto"> 
                                <h3 className="font-bold text-4xl mb-4">Ewing Gas Piping LLC</h3>
                                <div className='text-md font-medium text-gray-600'>
                                    <h5>Seth Ewing-Hendricks</h5>
                                    <p>ewinggaspiping@gmail.com</p>
                                    <p>704-661-7172</p>
                                    <div className="mx-auto text-center mt-2">
                                        <ul className="flex justify-center mb-4 md:mb-0">
                                            <li className="ml-4">
                                                <Link to="#" className="flex justify-center items-center text-red hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>       

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;