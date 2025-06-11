import React from 'react';


export default function Faq({ faq }) {
  if (!faq || !faq.items) return null;

  return (
    <section id="faq" className="container py-5">
      <div className="text-center mb-4">
        <h2 className="animate__animated animate__fadeInUp">{faq.title}</h2>
        <p className="text-muted animate__animated animate__fadeInUp animate__delay-1s">
          {faq.subtitle}
        </p>
      </div>

      <div className="accordion animate__animated animate__fadeInUp animate__delay-2s" id="faqAccordion">
        {faq.items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded="false"
                aria-controls={`collapse-${index}`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
