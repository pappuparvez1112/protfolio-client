import React from 'react';
import logoTwo from '../../../image/lamp2.png'

const FAQ = () => {
    return (
        <section className="container">

            <div className="container d-flex mb-5 p-3">

                <div className="col-6 p-2">
                    <h5 className="mt-5 btn btn-warning">FAQ</h5>
                    <h1 className="mt-5">Have you any question ?</h1>

                    <div className="mt-5">
                        <h5>1. what is Development?</h5>
                        <h6>Ans: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, iusto!</h6>

                    </div>
                    <div className="mt-5">
                        <h5>2. what is Development?</h5>
                        <h6>Ans: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, iusto!</h6>

                    </div>
                    <div className="mt-5">
                        <h5>3. what is Development?</h5>
                        <h6>Ans: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, iusto!</h6>

                    </div>
                    <div className="mt-5">
                        <h5>4. what is Development?</h5>
                        <h6>Ans: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, iusto!</h6>

                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center ">
                    <img style={{marginTop:"100px",marginLeft:"50px",width:"100%"}} src={logoTwo} alt="" />
                </div>



            </div>


        </section>
    );
};

export default FAQ;