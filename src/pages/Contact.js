import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Notiflix from 'notiflix';
import axios from 'axios';

const Contact = () => {
    useDocTitle('Ewing Gas Piping LLC');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    const clearErrors = () => {
        setErrors([]);
    };

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Loading...';

        let fData = new FormData();
        fData.append('first_name', firstName);
        fData.append('last_name', lastName);
        fData.append('email', email);
        fData.append('phone_number', phone);
        fData.append('message', message);

        axios({
            method: 'post',
            url: 'https://formsubmit.co/ewinggaspiping@gmail.com',
            data: fData,
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(function (response) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
            clearInput();
            Notiflix.Report.success('Success', response.data.message, 'Okay');
        })
        .catch(function (error) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
            if (error.response) {
                Notiflix.Report.failure(
                    'An error occurred',
                    error.response.data.message || 'Something went wrong',
                    'Okay'
                );
                if (error.response.data.errors) {
                    setErrors(error.response.data.errors);
                }
            } else {
                Notiflix.Report.failure(
                    'An error occurred',
                    'Unable to send message. Please try again later.',
                    'Okay'
                );
            }
        });
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail}>
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-red uppercase text-4xl">Send us a message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="first_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                                </div>
                                <div>
                                    <input
                                        name="last_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                                </div>
                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" // Changed type to "text" for phone number to allow for formatting
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-red text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-red rounded-2xl">
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                            </div>
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-400">704-661-7172</p>
                                    <div className='mt-5'>
                                        <h2 className="text-2xl">Send an E-mail</h2>
                                        <p className="text-gray-400">ewinggaspiping@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex my-4 w-2/3 lg:w-1/2">
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
            <Footer />
        </>
    );
}

export default Contact;