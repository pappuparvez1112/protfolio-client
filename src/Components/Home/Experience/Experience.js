import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <section className="container  py-5  ">
            <div>
                <div className="text-center  ">
                    <h5 className="btn btn-warning experience"> Resume</h5>
                    <h1 style={{color:"gray"}}>Experience</h1>
                </div>
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-6">
                        <div className="p-2" >

                            <div className="text-center py-5 experience">
                                <h1 style={{color:"goldenrod"}}>My Education</h1>
                            </div>
                            <div className="card shadow-sm p-3 experience">
                                <h3>Bechelor in CSE </h3>
                                <h5>Tejgoan proffesional university / 2018-running</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis error blanditiis consectetur sapiente fugiat eaque, quae delectus minima ipsum laborum commodi voluptatem eius qui repellat cupiditate aperiam. Repudiandae, assumenda!</p>
                            </div>
                            <div className="card shadow-sm  p-3 p-3 experience">
                                <h3>Programming (MERN)</h3>
                                <h5>Programming-Hero / 2021-Running</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis error blanditiis consectetur sapiente fugiat eaque, quae delectus minima ipsum laborum commodi voluptatem eius qui repellat cupiditate aperiam. Repudiandae, assumenda!</p>
                            </div>
                            <div className="card shadow-sm p-3 p-3 experience">
                                <h3>ACCA</h3>
                                <h5>Oxford brokes University (Lcbs) / 2016-2018</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est officiis error blanditiis consectetur sapiente fugiat eaque, quae delectus minima ipsum laborum commodi voluptatem eius qui repellat cupiditate aperiam. Repudiandae, assumenda!</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 col-md-6 " >

                        <div className="text-center py-5 experience">
                            <h1 style={{color:"steelblue"}}>My Experience</h1>
                        </div>
                        <div className="card shadow-sm p-3 experience">
                            <h3>Sr.Font End Developer</h3>
                            <h5>programming-hero / 2021-current</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi illum praesentium laboriosam fugiat provident, possimus eos, et aperiam rerum corrupti, voluptate cum illo hic excepturi voluptatibus veritatis ipsum suscipit ea.</p>
                        </div>
                        <div className="card shadow-sm p-3 experience">
                            <h3>Jr. Back End Developer</h3>
                            <h5>programming-hero / 2021 -cuurent</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi illum praesentium laboriosam fugiat provident, possimus eos, et aperiam rerum corrupti, voluptate cum illo hic excepturi voluptatibus veritatis ipsum suscipit ea.</p>
                        </div>
                        <div className="card shadow-sm p-3 experience">
                            <h3>Web-Designer</h3>
                            <h5>freelancher.com / 2021- running</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi illum praesentium laboriosam fugiat provident, possimus eos, et aperiam rerum corrupti, voluptate cum illo hic excepturi voluptatibus veritatis ipsum suscipit ea.</p>
                        </div>
                    </div>

                </div>
            </div>


        </section>

    );
};

export default Experience;