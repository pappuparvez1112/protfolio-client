import React from 'react';
import koma from '../../../image/koma2.jpg'
import client from '../../../image/wilson.png'

const ClientReviews = () => {
    return (
        <section style={{backgroundColor:"snow"}} className=" py-5">
            <div className="">
                <div className="text-center">
                    <h5 className="mb-3 btn btn-warning">Reviews</h5>
                    <h1>Client Says</h1>
                </div>
                <div className="text-center">
                    <img style={{width:"150px",marginBottom:"60px"}} src={koma} alt="" />
                   

                </div>
                <div className="text-center container pb-3">
                    <img className="mb-5 " style={{width:"100px",borderRadius:"200%"}} src={client} alt="" />
                    <h4 className="mb-3">Wilson backer</h4>
                    <p className="text-start px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam ducimus dolor, id quo voluptas alias ut doloribus inventore asperiores. Rerum, velit! Ad nobis qui soluta iusto explicabo accusantium iste.</p>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;