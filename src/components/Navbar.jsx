/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid text-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-auto" id="navbarNav">
          <ul className="navbar-nav mx-auto justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="#">Aluguel</a>
            </li>
            <li className="nav-item">   
              <a className="nav-link" href="#">Experiência</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Indicações</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
