import React from 'react';
import img from '../images/gaspipe.jpeg'; 
import img2 from '../images/generator.jpeg';
import img3 from '../images/firefeatures.jpeg';
import img4 from '../images/grill.jpeg'



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
                                alt: "Gas piping installation",
                                text: "We specialize in safe and efficient gas piping installation and maintenance, ensuring compliance with all safety standards."
                            },
                            {
                                img: img2,
                                alt: "Generator installation",
                                text: "We provide expert installation and maintenance of reliable generators to ensure uninterrupted power for your home or business."
                            },
                            {
                                img: img3,
                                alt: "Fire features",
                                text: "Our custom fire features enhance outdoor spaces like patios and pools, offering stylish and safe solutions for warmth and ambiance."
                            },
                            {
                                img: img4,
                                alt: "Grill installation",
                                text: "We offer premium grill installation and maintenance services, elevating your outdoor cooking experience with high-performance equipment."
                            },
                            {
                                img: img4,
                                alt: "Grill installation",
                                text: "We offer premium grill installation and maintenance services, elevating your outdoor cooking experience with high-performance equipment."
                            },
                            {
                                img: img4,
                                alt: "Grill installation",
                                text: "We offer premium grill installation and maintenance services, elevating your outdoor cooking experience with high-performance equipment."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg p-3 group min-w-[250px]">
                                <div className="m-2 text-justify text-sm">
                                    <img alt={item.alt} className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={item.img} style={{ width: '100%', height: '275px', objectFit: 'cover' }} />
                                    <p className="text-md font-medium">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;