import React from 'react';
import logo from '../../../image/Group 33089.png'

const AboutMain = () => {
    return (
        <section  className="container">

            <div className=" row">
                <div className=" mt-5 col-md-10 container-fluid  d-flex justify-content-center  ">
                    <div className="mt-5 me-5 text-center" >
                        <h1 style={{color:"crimson"}} className="mb-5">About Me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, dolore deleniti doloribus necessitatibus dignissimos voluptates magnam doloremque modi temporibus porro facilis adipisci sed fugit deserunt aperiam nulla. Quo laborum animi neque eius ipsa. Deleniti possimus quae nam quia voluptatum eveniet consequuntur totam, eius nobis modi explicabo harum fugit, et iure? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore optio in error tenetur aliquid odio assumenda dolorum vitae sint animi. </p>
                    </div>
                    <div className="col-md-2 text-center me-5 mt-5">
                        <img style={{ marginBottom: "20PX",width:"300px" }} src={logo} alt="ok" />
                        
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