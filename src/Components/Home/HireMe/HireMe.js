import React from 'react';
import './HireMe.css'

const HireMe = () => {
    return (
        <section className="hireme">
            <div style={{padding:"30px",margin:"30px",color:"darkcyan"}} className="text-center mb-5 ">
                <h1 className="mt-5">If you are interested</h1>
                <button className="btn btn-success p-3 mt-5">Hire me</button>
            </div>
        </section>

    );
};

export default HireMe;