import React from 'react';
import 'animate.css';
  
export default function Stats({ stats }) {
  if (!stats || !stats.items) return null;

  return (
    <section id="stats" className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">{stats.title}</h2>
        <div className="row justify-content-center">
          {stats.items.map((item, index) => (
            <div
              key={index}
              className="col-6 col-md-3 mb-4 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              <div className="fs-1 fw-semibold text-primary">{item.value}</div>
              <div className="text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
