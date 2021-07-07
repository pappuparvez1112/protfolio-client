import React from 'react';
import { Link } from 'react-router-dom';
import imageOne from '../../../image/picture 1.png'
import imageTwo from '../../../image/picture 2.png'
import imageThree from '../../../image/picture 3.png'

const Projects = () => {
    return (
        <section className="mt-5">
             <div>
             <div className=" text-center p-5 ">
                    <h5 style={{color:"yellowgreen"}} className="mb-5">What i have done</h5>
                    <h1>My project</h1>
                </div>
                <div className="card-deck mt-5  d-flex justify-content-center mb-5">
                    <div className="card shadow-sm d-flex col-md-3 text-center mb-5 ms-5">
                        <img style={{width:"400px"}} src={imageOne} alt="" />
                        <Link style={{textDecoration:"none"}} to="/file:///G:/web%20development/panda-ecomerce/index.html#bag" className="mt-5">Live Link</Link>

                    </div>
                    <div className="card shadow-sm d-flex col-md-3 text-center mb-5 ms-5">
                        <img style={{width:"400px",height:"296px"}} src={imageTwo} alt="" />
                        <Link style={{textDecoration:"none"}} className="mt-3" to="/file:///G:/web%20development/project%201/leader-board-master/leader-board-master/Idea.pdf">Live Link</Link>

                    </div>
                    <div className="card shadow-sm d-flex col-md-3 text-center mb-5 ms-5">
                        <img style={{width:"400px",height:"294px"}} src={imageThree} alt="" />
                        <Link style={{textDecoration:"none"}} className="mt-3 " href="/file:///G:/web%20development/project/web-protfolio/index.html"> Live Link</Link>

                    </div>

                </div>
            
            </div>

        </section>
       
    );
};

export default Projects;