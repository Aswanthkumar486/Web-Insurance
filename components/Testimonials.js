import React from "react";

export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-light py-5" id="testimonials">
      <div className="container text-center">
        <h2 className="mb-3">{testimonials.title}</h2>
        <p className="text-muted mb-5">{testimonials.subtitle}</p>
        <div className="row">
          {testimonials.items.map(({ id, content, author, role }) => (
            <div key={id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <p className="card-text text-muted mb-4">"{content}"</p>
                  <h5 className="card-title mb-0">{author}</h5>
                  <small className="text-primary">{role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
