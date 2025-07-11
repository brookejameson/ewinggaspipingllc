import React from 'react';

const Review = ({ name, text }) => {
    return (
        //<div className="bg-white p-4 rounded-lg shadow-md review-container" style={{ width: '400px' , height: '200px'}}>
        <div className="bg-white p-4 rounded-lg shadow-md review-container 
            sm:w-[400px] sm:h-[200px] w-[200px] h-[350px]">
            
            <div className="flex items-center mb-2" >
                <span className="text-red">
                    ★★★★★
                </span>
                <p className="ml-2 text-gray-700 font-semibold">{name}</p>
            </div>
            <div className="text-gray-600 sm:w-[300px] w-[170px]">
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
                        <div className="min-w-[300px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center hover:bg-gray-100 transition-all">
                            <h3 className="text-lg font-semibold mb-2">For More Customer Feedback:</h3>
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
            </section>
        </div>
    )
}

export default Clients;