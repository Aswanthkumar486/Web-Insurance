import React from 'react';

export default function Works({ data }) {
  return (
    <section id="claims" className="container py-5">
      <h2 className="text-center">{data.title}</h2>
      <p className="text-center text-muted mb-4">{data.subtitle}</p>
      <div className="row">
        {data.projects.map(project => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card h-100">
              <img src={project.image} alt={project.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <ul className="list-unstyled">
                  {project.tech.map((tech, index) => (
                    <li key={index} className="badge bg-secondary me-1">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
