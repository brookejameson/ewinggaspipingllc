import React from 'react';
import img from '../images/gaslines.png'; 
import img2 from '../images/gaspipe.jpeg';
import img3 from '../images/pool.jpeg';
import img4 from '../images/generator.png';
import img5 from '../images/firefeature.png';
import img6 from '../images/firplace.png';
import img7 from '../images/grill.jpeg';
import img8 from '../images/lightpost.png';


const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-red uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-red'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-gray-500">
                            We specialize in residential and commercial gas pipe installations and repairs, including natural gas and propane lines. We are committed to delivering safe, reliable service and ensuring complete client satisfaction.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} style={{ width: '100%', height: '275px', objectFit: 'cover' }} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Gas Piping</h2>
                                    <p className="text-md font-medium mt-2">
                                    We install and maintain gas pipes for both residential and commercial properties, ensuring the safe delivery of natural gas or propane.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} style={{ width: '100%', height: '275px', objectFit: 'cover' }} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Gas Line Repair</h2>
                                    <p className="text-md font-medium mt-2">
                                    We provide expert gas line repairs to ensure the safety and efficiency of your gas system, diagnosing and fixing leaks or damage.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} style={{ width: '100%', height: '275px', objectFit: 'cover' }}/>
                                    <h2 className="font-semibold my-4 text-2xl text-center">Pool Heaters</h2>
                                    <p className="text-md font-medium mt-2">
                                    Our pool heater installation and maintenance services keep your pool comfortably warm year-round, powered by efficient gas systems.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} style={{ width: '100%', height: '275px', objectFit: 'cover' }}/>
                                    <h2 className="font-semibold my-4 text-2xl text-center">Generators</h2>
                                    <p className="text-md font-medium mt-2">
                                    We provide expert installation and maintenance of reliable generators to ensure uninterrupted power for your home or business.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img5} style={{ width: '100%', height: '275px', objectFit: 'cover' }} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Fire Features</h2>
                                    <p className="text-md font-medium mt-2">
                                    Our custom fire features enhance outdoor spaces like patios and pools, offering stylish and safe solutions for warmth and ambiance.                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img6} style={{ width: '100%', height: '275px', objectFit: 'cover' }} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Fire Places</h2>
                                    <p className="text-md font-medium mt-2">
                                    Our expert team installs and maintains indoor and outdoor gas fireplaces, providing warmth, comfort, and efficiency in your living spaces.
                                    </p>
                                </div>
                            </div>


                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img7} style={{ width: '100%', height: '275px', objectFit: 'cover' }}/>
                                    <h2 className="font-semibold my-4 text-2xl text-center">Grills</h2>
                                    <p className="text-md font-medium mt-2">
                                    We offer premium grill installation and maintenance services, elevating your outdoor cooking experience with high-performance equipment.                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-center text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img8} style={{ width: '100%', height: '275px', objectFit: 'cover' }} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Other</h2>
                                    <p className="text-md font-medium mt-2">
                                    If you have any other inquiries or need services not listed here, please don't hesitate to contact us. We’re happy to assist with customized solutions for your specific needs.
                                    </p>
                                </div>
                            </div>

                   
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Services;