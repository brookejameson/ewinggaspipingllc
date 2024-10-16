import React from 'react';

const Review = ({ name, text }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md review-container" style={{ width: '400px' , height: '200px'}}>
            <div className="flex items-center mb-2" >
                <span className="text-red">
                    ★★★★★
                </span>
                <p className="ml-2 text-gray-700 font-semibold">{name}</p>
            </div>
            <div className="text-gray-600" style={{ width: '300px' }}>
                <p >{text}</p>
            </div>
        </div>
    );
};

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-red uppercase font-bold">Satisfied Customers</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-red'></div>
                    </div>
                </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="flex overflow-x-auto gap-4 scrollbar-hide">
                        <Review name="Emily B." text="Seth was very professional and went above and beyond. He doesn't stop until the job is completely finished. Awesome guy!" />
                        <Review name="Brian H." text="Exceptionally personable and professional service. He took extra time and care to test and re-test the installation as well as walk through the job with me when completed." />
                        <Review name="Kellena B." text="You can see how much time he puts into his craft through his attention to detail and work. Seth answers all questions and makes sure the customer is happy." />  
                        <Review name="Renee D." text="Ewing team was great to work with for my fireplace installation. They created a thoughtful plan for my project and worked hard to execute. Will definitely use Ewing again for our gas stove install." />              
                        <Review name="Kristin M." text="Highly recommend! Polite, responsive, super detailed and immaculate workmanship. Seth and team installed the gas lines for our pool, barbecue, and fire pit. We couldn’t be happier with the services we received." />              
                        <Review name="Preston E." text="Seth does an amazing job! He was punctual and efficient, he took time to answer all our questions and made sure we were satisfied with his work. We would highly recommend him for any gas work you need done!!" />              
                        <Review name="Charles R." text="Ewing Gas Piping was fast and reliable when it came to hooking up my gas generator. Did an excellent job. When the gas company came to put in the meter, he even bragged on what a good job Ewing had done." />              
                        <Review name="Danielle K." text="Seth did an impeccable job running our gas line to our pool equipment. He was able to accommodate our space restraints, was very professional and courteous throughout the job." />              
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;