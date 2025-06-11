import React from 'react';

export default function Hero({ data }) {
  const { title, subtitle, ctaText, carouselImages } = data;

  return (
    <div className="position-relative">
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
        
        {/* Indicators */}
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {carouselImages.map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={img}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{ height: '100vh', objectFit: 'cover', filter: 'brightness(65%) blur(1px)' }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-4 fw-bold text-white text-shadow">{title}</h1>
                <p className="fs-5 text-light text-shadow-sm">{subtitle}</p>
                <button className="btn btn-warning btn-lg px-5 py-3 fw-semibold shadow">
                  {ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
