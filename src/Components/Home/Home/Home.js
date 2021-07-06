import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import CanDo from '../CanDo/CanDo';
import Experience from '../Experience/Experience';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <About></About>
            <CanDo></CanDo>
            <Experience></Experience>
            <Skill></Skill>
        </div>
    );
};

export default Home;