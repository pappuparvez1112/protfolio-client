import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className=" px-0" style={{backgroundColor:"orange"}}>
           
           <div  className="container row pt-5 ms-3 px-4  d-flex justify-content-start  ">
                <div className=" col-4 px-5 py-5 ">
                    <div className="py-5 ">

                        <button  className="btn btn-primary mb-3">+2025550295</button>
                        <h6>Call now</h6>
                    </div>
                    <div className="mt-5  ">
                        <ul className="social-media list-inline d-flex">
                            <li className="list-inline-item me-4"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li  className="list-inline-item me-4"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>

                    </div>
                </div>
                <div className=" col-8 text-center mb-5  ">
                    <h1>Contact Us</h1>
                    <div className="form-group text-start mb-2 ">
                        <label className="mb-2" htmlFor="exampleInputEmail1">What is your name?</label>
                        <input onBlur="" type="email" className="form-control" name="email" placeholder="Please Enter what your name" />
                    </div>
                    <div className="form-group text-start ">
                        <label className="mb-2" htmlFor="exampleInputPassword1">What is your Email address?</label>
                        <input onBlur="" type="text" className="form-control" name="name" placeholder="Enter your Email" />
                    </div>
                    <div className="form-group text-start mt-2 ">
                        <label className="mb-2" htmlFor="exampleInputPassword1">How can i help you?</label>
                        <input onBlur="" type="text" className="form-control" name="name" placeholder="Enter your problem" />
                        <button className="btn btn-dark mt-3">Send</button>
                    </div>
                    

                </div>
            </div>
           

            <div style={{backgroundColor:"black"}} className="copyRight text-center text-white">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>


        </footer>

    );
};

export default Footer;