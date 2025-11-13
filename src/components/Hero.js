import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        src="/assets/video/milkyway.mp4"
        type="video/mp4"
      ></video>

      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">Bright to The Skin</h1>
          <p className="hero-subtitle shimmer-text multiline">
             Discover the Futur
            <br />
            Step into the future of elegance with Bright to The Skin.
A fragrance that blends pure freshness with modern sophistication, 
            <br />
            leaving your skin glowing with timeless allure.
Each note reveals confidence, beauty, and innovation — designed for the woman who shines effortlessly.
          </p>
          <button className="hero-btn"><a className="nav-link text-white" href="#features">Get Started</a></button>
        </div>

        {/* ✅ الصورة والضباب فوق بعض */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img
              src="/assets/images/r1.jpg"
              alt="Product"
              className="hero-img"
            />
            <img
              src="/assets/images/fog.png"
              alt="Fog Effect"
              className="fog-overlay"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
