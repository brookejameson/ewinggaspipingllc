import React from 'react';

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
                                    <div className="flex justify-center my-4">
                                    <a 
                                        href="https://www.google.com/search?q=ewing+gas+piping+llc&rlz=1C5CHFA_enUS959US960&oq=Ewing+Gas+Piping+LLC&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyDQgBEAAYhgMYgAQYigUyCggCEAAYogQYiQUyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x630ee7c1744505a9:0x4829fcb8dbcc91c2,1,,," 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="rounded-full flex justify-center bg-white h-8 text-red w-8 mx-1 text-center pt-1"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24" className="fill-current hover:animate-pulse">
                                            <path fill="#4285F4" d="M24 9.5c3.19 0 5.56 1.38 6.84 2.54l5.04-4.88C32.26 4.35 28.55 3 24 3 15.88 3 9.15 8.1 6.63 15.04l5.88 4.57C13.35 14.1 18.3 9.5 24 9.5z"/>
                                            <path fill="#34A853" d="M46.2 24.54c0-1.59-.14-2.77-.43-3.97H24v7.51h12.56c-.25 2-1.62 5.02-4.66 7.03l7.16 5.59c4.18-3.86 6.14-9.54 6.14-16.16z"/>
                                            <path fill="#FBBC05" d="M11.2 28.57A14.68 14.68 0 0 1 11 24c0-1.59.27-3.13.74-4.57l-5.88-4.57A23.898 23.898 0 0 0 3 24c0 3.77.91 7.33 2.86 10.57l5.34-5.99z"/>
                                            <path fill="#EA4335" d="M24 46c6.3 0 11.58-2.1 15.44-5.73l-7.16-5.59c-2 1.39-4.75 2.37-8.28 2.37-6.35 0-11.74-4.23-13.67-10.11l-5.36 5.99C9.09 41.85 16.06 46 24 46z"/>
                                            <path fill="none" d="M0 0h48v48H0z"/>
                                        </svg>
                                    </a>
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