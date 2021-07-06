import React from 'react';
import './Skill.css'

const Skill = () => {
    return (
        <section className="container mt-5">
            <div className="container">
                <div className="mb-5">
                    <h1>My skill</h1>
                </div>

                <div class="container">
                    <p>Web Design</p>
                    <div class="skills html">90%</div>
                </div>


                <div class="container">
                    <p>Web Development</p>
                    <div class="skills css">80%</div>
                </div>

                <div class="container">
                    <p>React</p>
                    <div class="skills react">75%</div>
                </div>
                <div class="container">
                    <p>JavaScript</p>
                    <div class="skills js">65%</div>
                </div>
            </div>
        </section>
    );
};

export default Skill;