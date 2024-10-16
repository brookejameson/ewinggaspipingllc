import React from 'react';
import seth from '../images/seth.png';

const clientImage = {
    height: '300px',
    width: '100%',
};

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-red uppercase font-bold">Team Members</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-red mb-8'></div>
                </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="flex flex-col items-center">
                        <div style={clientImage} className="overflow-hidden flex justify-center mb-4">
                            <img src={seth} alt="Seth Ewing" />
                        </div>
                        <h3 className="text-xl font-bold text-center">Seth Ewing-Hendricks</h3>
                        <h3 className="text-xl font-bold text-center">CEO</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;