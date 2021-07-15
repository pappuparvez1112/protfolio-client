import React, { useState } from 'react';
import AboutAnother from '../AboutAnother/AboutAnother';
import logo from "../../../image/Group 33089.png"
import AboutMain from '../AboutMain/AboutMain';

const About = () => {

    // const aboutData = [

    //     {
    //         name: 'Pappu parvez',
    //         email: 'pappuparvezshazz@gmail.com',
    //         birth: '17/01/1997',
    //         from: 'Dhaka,Bangladesh'

    //     }
    // ]
    return (
       <div className="py-0 py-md-5">
           <AboutMain></AboutMain>
           <AboutAnother></AboutAnother>
       </div>

    );
};

export default About;