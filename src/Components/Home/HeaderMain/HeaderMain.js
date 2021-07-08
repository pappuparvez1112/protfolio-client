import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main className="row main">
            <div className="col text-center mt-5">
                <h3 style={{color:"seagreen"}} >Hi i am a Developer</h3>
                <h1 style={{fontFamily:"sans-serif",font:'inherit',fontSize:"50px",fontStyle:"inherit",fontWeight:'revert',color:"#3A4256"}} className="mt-5 ">Welcome to my Website</h1>
                <h5 className="btn btn-warning" >based in Dhaka,Bangladesh</h5>

                <div className="mt-3">
                    <button className="rounded btn btn-primary p-2" style={{backgroundColor:"skyblue",color:"#3A4256",fontSize:"20px"}}>Hire Me</button>
                </div>

            </div>
        </main>
    );
};

export default HeaderMain;