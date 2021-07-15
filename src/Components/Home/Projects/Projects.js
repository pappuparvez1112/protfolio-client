import React from 'react';
import { Link } from 'react-router-dom';
import imageOne from '../../../image/pic 1 new.png'
import imageTwo from '../../../image/pic 2 new.png'
import imageThree from '../../../image/pic 3 new.png'
import './Project.css'

const Projects = () => {
    return (
        <section className="py-5 container">
            <div className="">
                <div className=" text-center ">
                    <h5  className="py-2 btn btn-warning project">What i have done</h5>
                    <h1 className="py-3">My project</h1>
                </div>
                <div className="card-deck  row  d-flex justify-content-center  ">
                    <div className="col-md-4 project ">
                        <div className=" card shadow-sm d-flex text-center mb-3 p-3">
                            <img style={{ width: "100%",height:"300px" }} src={imageOne} alt="" />
                        </div>
                        <div className="text-center">
                            <a style={{ textDecoration: "none" }} href="https://pappuparvez1112.github.io/responsive-shoe-fashion/" className="mt-5">Live Link</a>
                        </div>

                    </div>
                    <div className="col-md-4 project" >
                        <div className="card shadow-sm  d-flex text-center mb-3 p-3 " >
                            <img style={{ width: "100%",height:"300px" }} src={imageTwo} alt="" />
                        </div>
                        <div className="text-center">
                            <a style={{ textDecoration: "none" }} className="mt-3" href="https://pappuparvez1112.github.io/panda-ecommerce/">Live Link</a>
                        </div>



                    </div>
                    <div className="col-md-4 project" >
                        <div className="  card shadow-sm d-flex  text-center mb-3 p-3">
                            <img style={{ width: "100%",height:"300px" }} src={imageThree} alt="" />
                        </div>

                        <div className="text-center">
                            <a style={{ textDecoration: "none" }} className="mt-3 " href="https://pappuparvez1112.github.io/personal-web-protfolio/"> Live Link</a>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default Projects;