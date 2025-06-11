import React from 'react';

export default function ContactUs({ data }) {
  if (!data) return null;

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">{data.title}</h2>
        <p className="text-center text-muted mb-5">{data.subtitle}</p>

        <div className="row">
          {/* Contact Info */}
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold">{data.companyName}</h5>
            <p className="text-muted">{data.description}</p>

            <ul className="list-unstyled">
              {data.info?.map((item, i) => (
                <li key={i} className="mb-3 d-flex align-items-start">
                  <i className={`bi bi-${item.icon} text-primary fs-4 me-3`}></i>
                  <div>
                    <div className="fw-semibold">{item.title}</div>
                    <div>{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <form>
              {data.formFields?.map((field, idx) => (
                <div className="mb-3" key={idx}>
                  <label htmlFor={field.name} className="form-label">{field.label}</label>

                  {field.type === 'textarea' ? (
                    <textarea
                      className="form-control"
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={4}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      className="form-select"
                      id={field.name}
                      name={field.name}
                      required={field.required}
                    >
                      <option value="">Select...</option>
                      {field.options?.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className="form-control"
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  )}
                </div>
              ))}

              <button type="submit" className="btn btn-primary w-100">
                {data.ctaText || 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
