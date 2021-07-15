import React from 'react';
import logo from '../../../image/Group 33089.png'
import './AboutMain.css'

const AboutMain = () => {
    return (
        <section  className="container ">

            <div className=" py-5">
                <div className="  container-fluid  d-flex justify-content-center  row  ">
                    <div className=" col-md-8 text-center order-2 order-md-1 animation" >
                        <h1 style={{color:"crimson"}} className="mb-5">About Me</h1>
                        <p className="text-start px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, dolore deleniti doloribus necessitatibus dignissimos voluptates magnam doloremque modi temporibus porro facilis adipisci sed fugit deserunt aperiam nulla. Quo laborum animi neque eius ipsa. Deleniti possimus quae nam quia voluptatum eveniet consequuntur totam, eius nobis modi explicabo harum fugit, et iure? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore optio in error tenetur aliquid odio assumenda dolorum vitae sint animi. </p>
                    </div>
                    <div className=" col-md-4 text-center mb-3 order-1 order-md-2 animationanother">
                        <img style={{width:"100%" }} src={logo} alt="ok" />
                        
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

export default AboutMain;