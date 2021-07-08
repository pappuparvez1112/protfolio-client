import React from 'react';

const AboutAnother = ({ about }) => {

    return (
        <section className="container ">
            <div className=" col d-flex mt-5 ms-5 mb-5 ">
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
        </section>


    );
};

export default AboutAnother;