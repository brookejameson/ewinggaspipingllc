import React from 'react';
import CustomerFeedback from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Partners from '../components/TeamMembers';
import Services from '../components/Services';
import ServiceArea from '../components/ServiceArea'
import Gallery from '../components/Gallery';


const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <ServiceArea/>
            <Gallery />
            <Partners />
            <CustomerFeedback />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

