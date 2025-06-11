import React from 'react';

export default function Footer({ footer }) {
  if (!footer) return null;

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0" style={{ color: 'white' }}>
              {footer?.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
