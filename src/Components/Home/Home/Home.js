import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import CanDo from '../CanDo/CanDo';
import Experience from '../Experience/Experience';
import Skill from '../Skill/Skill';
import Projects from '../Projects/Projects';
import HireMe from '../HireMe/HireMe';
import FAQ from '../FAQ/FAQ';
import ClientReviews from '../ClientReviews/ClientReviews';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <About></About>
            <CanDo></CanDo>
            <Experience></Experience>
            <Skill></Skill>
            <Projects></Projects>
            <HireMe></HireMe>
            <FAQ></FAQ>
            <ClientReviews></ClientReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;