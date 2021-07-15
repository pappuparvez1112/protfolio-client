import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faDatabase, faDesktop, faPalette} from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './CanDo.css'
const CanDo = () => {
    return (
        <section style={{backgroundColor:"snow"}} className="py-5">
            <div >
                <div className=" text-center p-5 ">
                    <h5 style={{color:"black"}} className="mb-5 btn btn-warning cando">What i can do</h5>
                    <h1>How can i help your project?</h1>
                </div>
                <div className=" row mx-1 my-0 d-flex justify-content-center ">
                    <div className="p-5 mx-3 my-3 card shadow-sm d-flex col-md-3  text-center cando">
                        <p className="mt-5"><FontAwesomeIcon  style={{color:"orange",fontSize:"30px"}} icon={faDesktop}></FontAwesomeIcon></p>
                        <h5>web design</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, excepturi ad eveniet asperiores possimus reiciendis et esse facere tenetur ex.</p>
                    </div>
                    <div className=" p-5 mx-3 my-3 card shadow-sm d-flex col-md-3 text-center cando">
                        <p className="mt-5"><FontAwesomeIcon style={{color:"orange",fontSize:"30px"}} icon={faDatabase}></FontAwesomeIcon></p>
                        <h5>web Wevelopment</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, excepturi ad eveniet asperiores possimus reiciendis et esse facere tenetur ex.</p>
                    </div>
                    <div className="p-5 mx-3 my-3 card shadow-sm d-flex col-md-3 text-center cando">
                        <p className="mt-3"><FontAwesomeIcon  style={{color:"orange",fontSize:"30px"}} icon={faGoogle}></FontAwesomeIcon></p>
                        <h5>SEO</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, excepturi ad eveniet asperiores possimus reiciendis et esse facere tenetur ex.</p>
                    </div>

                </div>
            </div>

        </section>

    );
};

export default CanDo;