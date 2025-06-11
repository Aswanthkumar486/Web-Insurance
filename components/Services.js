import React from 'react';

export default function Services({ services }) {
  return (
    <section id="plans" className="container py-5">
      <h2 className="text-center mb-4 h1">{services.title}</h2>
      <div className="row">
        {services.items.map(service => (
          <div className="col-md-4 mb-4" key={service.id}>
            <div className="card h-100 text-center">
              <img src={service.icon} alt={service.title} className="card-img-top p-4" style={{ height: '210px', objectFit: 'contain' }} />
              <div className="card-body">
                <h5 className="card-title h4">{service.title}</h5>
                <p className="card-text h6">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
