import React from 'react';

export default function About({ about }) {
  return (
    <section id="about" className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={about.image} alt="About" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h1>{about.title}</h1>
          <p className='h4'>{about.content}</p>
        </div>
      </div>
    </section>
  );
}
