import React from 'react';
import './HireMe.css'

const HireMe = () => {
    return (
        <section className="hireme py-5">
            <div style={{padding:"30px",margin:"30px",color:"springgreen"}} className="text-center mb-5 hirenew ">
                <h1 className="mt-5 hire">If you are interested</h1>
                <button className="btn btn-warning p-3 mt-5 hireanother">Hire me</button>
            </div>
        </section>

    );
};

export default HireMe;