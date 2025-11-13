import React from "react";

const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Discover premium skincare and perfumes crafted with care.  
            Brighten your skin and elevate your confidence with our products.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul >
            <li ><a href="#home" >Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><i className="fas fa-map-marker-alt"></i> Cairo, Egypt</p>
          <p><i className="fas fa-envelope"></i> mmariam1222004@gmail.com</p>
          <p><i className="fas fa-phone"></i> +20 11- --- -91</p>
        </div>

        <div className="footer-social">
          <h1>Skin Care</h1>
          <div className="social-icons">
            <h4>Follow Us: </h4>
            <div className="iclass">
                <a className="nav-link text-white" href="#"><i class="fa-brands fa-facebook"></i></a>
                <a className="nav-link text-white" href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a className="nav-link text-white" href="#"><i class="fa-brands fa-instagram"></i></a>
                <a className="nav-link text-white" href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bright to The Skin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
