import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mt-3">
        <div className="container">
          <a className="navbar-brand" href="/"><img className="ms-5" style={{height:"100px"}} src="" alt="" />Pappu parvez</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 ">
              <li className="nav-item ms-5">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
      
              </li>
              
              <li className="nav-item ms-5 ">
                <Link className="nav-link  "  to="/about">About</Link>
      
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link  "  to="/services"> Services</Link>
      
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link "  to="/blogs">Blogs</Link>
      
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link  "  to="/login">Log in</Link>
      
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link   "  to="/dashboard">Dashboard</Link>
      
              </li>
      
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default NavBar;