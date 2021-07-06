import React from 'react';

const AboutAnother = ({about}) => {
    
    return (
       <div className="col-3 d-flex  container-fluid ms-5 mt-5">
           <div className="d-flex  ms-5  ">
               <div  className="col-3"style={{marginLeft:"110px",fontWeight:"bold"}}>
                   <h5>Name:</h5>
                   <p>{about.name}</p>
               </div>
               <div className="col-3"style={{marginRight:"110px",fontWeight:"bold"}}>
               <h5>Email:</h5>
                 <p>{about.email}</p>
                   
               </div>
               <div className="col-3"style={{marginRight:"110px",fontWeight:"bold"}}>
               <h5>Date of Birth:</h5>
                   <p>{about.birth}</p>
               </div>
               <div className="col-3"style={{marginRight:"110px",fontWeight:"bold"}}>
                   <h5>Address:</h5>
                   <p>{about.from}</p>
               </div>

           </div>

       </div>
    );
};

export default AboutAnother;