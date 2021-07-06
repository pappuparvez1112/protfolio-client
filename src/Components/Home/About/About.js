import React, { useState } from 'react';
import AboutAnother from '../AboutAnother/AboutAnother';
import logo from "../../../image/Group 33089.png"

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
        <section  className="container mt-5">

            <div className=" row">
                <div className=" mt-5 col-md-10 container-fluid  d-flex justify-content-center  ">
                    <div className="mt-5 me-5 text-center" >
                        <h1 style={{color:"crimson"}} className="mb-5">About Me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, dolore deleniti doloribus necessitatibus dignissimos voluptates magnam doloremque modi temporibus porro facilis adipisci sed fugit deserunt aperiam nulla. Quo laborum animi neque eius ipsa. Deleniti possimus quae nam quia voluptatum eveniet consequuntur totam, eius nobis modi explicabo harum fugit, et iure? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore optio in error tenetur aliquid odio assumenda dolorum vitae sint animi. </p>
                    </div>
                    <div className="col-2 text-center me-5 mt-5">
                        <img style={{ marginBottom: "20PX",width:"300px" }} src={logo} alt="ok" />
                        
                    </div>
                </div>
                
                    <div className="d-flex mt-5 ms-5 mb-5 ">
                        <div className="col-md-3 ms-3">
                            <h5>Name:</h5>
                            <p>Pappu parvez</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Email:</h5>
                            <p>pappuparvezshazz@gmail.com</p>

                        </div>
                        <div className="col-md-3">
                            <h5>Date of Birth:</h5>
                            <p>17/01/1997</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Address:</h5>
                            <p>Dhaka,Bangladesh</p>
                        </div>

                    
                </div>

            </div>


            {/* className="" style={{ marginLeft: "110px", fontWeight: "bold" }} */}


            {/* <div className="row">
                {
                    aboutData.map(about => <AboutAnother about={about}></AboutAnother>)
                }

            </div> */}

        </section>

    );
};

export default About;