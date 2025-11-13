import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-ghost">
        <div className="container px-4">
          <a className="navbar-brand fw-bold text-primary" href="#home">
            Skin Care
          </a>

          {/* زر الهامبرجر يظهر فقط على الموبايل */}
          <button
            className="btn btn-hamburger d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
          >
            <span className="hamburger-lines"></span>
            <span className="hamburger-lines"></span>
            <span className="hamburger-lines"></span>
          </button>

          {/* الناف العادي يظهر من أول التابلت */}
          <div className="collapse navbar-collapse justify-content-end d-none d-md-flex" id="nav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item"><a className="nav-link text-white" href="#features">Explore</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#products">Products</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact Us</a></li>
              <li className="nav-item ms-2">
                <button className="btn btn-outline-light btn-sm">Sign in</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* الـ Offcanvas للموبايل */}
      <div
        className="offcanvas offcanvas-start text-bg-dark"
        tabIndex="-1"
        id="mobileNav"
        aria-labelledby="mobileNavLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileNavLabel">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">

            <li className="nav-item"><a className="nav-link text-white" href="#features">Explore</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#products">Products</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact Us</a></li>
            <li className="nav-item mt-3">
              <button 
                className="nav-link text-danger fw-bold btn btn-link" 
                type="button" 
                data-bs-dismiss="offcanvas"
              >
                Exit the Menu
              </button>
            </li>
            <li className="nav-item mt-3">
              <button className="btn btn-outline-light w-100">Sign in</button>
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
