import React from 'react';

export default function Navbar({ nav }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="#">
       <h1>{nav.logo}</h1>
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {nav["nav-list"].map((item, index) => (
            <li className="nav-item px-2 h3" key={index}>
              <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}   
        </ul>
      </div>
    </nav>
  );
}
