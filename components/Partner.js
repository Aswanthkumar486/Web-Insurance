import Image from "next/image";
import React from "react";

export default function Partners({ partners }) {
  return (
    <section className="py-5 bg-white border-top" id="partners">
      <div className="container text-center">
        <h2 className="mb-3">{partners.title}</h2>
        <div className="row justify-content-center align-items-center">
          {partners.items.map((partner, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="img-fluid"
                width={150}
                height={80}
              />
              <p className="small mt-2">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
