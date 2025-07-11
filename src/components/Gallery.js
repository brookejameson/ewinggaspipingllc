import React from 'react';
import img from '../images/firefeature.png'; 
import img2 from '../images/firefeatures.jpeg';
import img3 from '../images/firepit.png';
import img4 from '../images/firplace.png'
import img5 from '../images/gaslines.png'
import img6 from '../images/gaspipe.jpeg'
import img7 from '../images/genera.png'
import img8 from '../images/generac.png'
import img9 from '../images/generator.jpeg'
import img10 from '../images/generator.png'
import img11 from '../images/grill.jpeg'
import img12 from '../images/lightpost.png'
import img13 from '../images/stove.png'
import img14 from '../images/pool.jpeg'




const Gallery = () => {
    return (
        <div id="gallery" className="mt-8 bg-gray-100 pb-12">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-red uppercase font-bold">Gallery</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-red'></div>
                    </div>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="flex overflow-x-auto gap-5 scrollbar-hide">
                        {[
                            {
                                img: img,
                                text: "Outdoor fire feature."
                            },
                            {
                                img: img2,
                                text: "Outdoor fire feature."
                            },
                            {
                                img: img3,
                                text: "Outdoor fire feature."
                            },
                            {
                                img: img4,
                                text: "Indoor fireplace."
                            },
                            {
                                img: img5,
                                text: "Gas piping and generator installation."
                            },
                            {
                                img: img6,
                                text: "Gas line installation."
                            },
                            {
                                img: img7,
                                text: "Generator installation."
                            },
                            {
                                img: img8,
                                text: "Generator installation."
                            },
                            {
                                img: img9,
                                text: "Generator installation."
                            },
                            {
                                img: img10,
                                text: "Generator installation."
                            },
                            {
                                img: img11,
                                text: "Outdoor grill."
                            },
                            {
                                img: img12,
                                text: "Outdoor fire feature."
                            },
                            {
                                img: img13,
                                text: "Indoor stovetop installation."
                            },
                            {
                                img: img14,
                                text: "Outdoor pool fire feature."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg p-3 group min-w-[250px]">
                                <div className="m-2 text-center text-sm">
                                    <img alt={item.alt} className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={item.img} style={{ width: '100%', height: '275px', objectFit: 'cover' }} />
                                    <p className="text-md font-medium mt-2">{item.text}</p>
                                </div>
                            </div>
                        ))}
                        <div className="min-w-[250px] bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center text-center hover:bg-gray-500 hover:text-white transition-all ease-in-out duration-400">
                            <h3 className="text-lg font-semibold mb-2">More Photos:</h3>
                            <a 
                                href="https://www.google.com/search?q=ewing+gas+piping+llc&rlz=1C5CHFA_enUS959US960&oq=Ewing+Gas+Piping+LLC&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyDQgBEAAYhgMYgAQYigUyCggCEAAYogQYiQUyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPagCALACAA&sourceid=chrome&ie=UTF-8#lpg=cid:CgIgAQ%3D%3D,ik:CAoSLEFGMVFpcE1Cb0tWOVQtLUE5Q0JaM1lDblJUWEtscGpfdWc4TVhqNHBKSzRo" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="rounded-full flex justify-center bg-white h-10 w-10 text-red mx-1 text-center items-center hover:animate-pulse"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24" className="fill-current">
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
            </section>
        </div>
    );
};

export default Gallery;