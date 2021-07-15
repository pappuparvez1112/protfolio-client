import React from 'react';
import './Skill.css'

const Skill = () => {
    return (
        <section className="container py-5 ">
            <div className=" ">
                <div className="mb-5 px-2">
                    <h1>My skill</h1>
                </div>

                <div class="container skill">
                    <p>Web Design</p>
                    <div class="skills html">90%</div>
                </div>


                <div class="container skill">
                    <p>Web Development</p>
                    <div class="skills css">80%</div>
                </div>

                <div class="container skill">
                    <p>React</p>
                    <div class="skills react">75%</div>
                </div>
                <div class="container skill">
                    <p>JavaScript</p>
                    <div class="skills js">65%</div>
                </div>
            </div>
        </section>
    );
};

export default Skill;