import React from "react";
import automation from "./images/automation.jpg";
import cloud from "./images/cloud.jpg";
import analytics from "./images/analytics.jpg";

function HeroSlider() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
      data-bs-pause="false"
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <div className="hero-overlay"></div>
          <img src={automation} className="d-block w-100 hero-image" alt="Automation" />

          <div className="carousel-caption hero-text">
            <h1>Business Process Automation</h1>
            <p>Automate workflows and improve operational efficiency</p>
          </div>
        </div>

        <div className="carousel-item">
          <div className="hero-overlay"></div>
          <img src={cloud} className="d-block w-100 hero-image" alt="Cloud" />

          <div className="carousel-caption hero-text">
            <h1>Cloud & DevOps Solutions</h1>
            <p>Azure | AWS | CI/CD | Docker | Kubernetes</p>
          </div>
        </div>

        <div className="carousel-item">
          <div className="hero-overlay"></div>
          <img src={analytics} className="d-block w-100 hero-image" alt="Analytics" />

          <div className="carousel-caption hero-text">
            <h1>Business Analytics</h1>
            <p>Dashboards and reporting for smarter decisions</p>
          </div>
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default HeroSlider;