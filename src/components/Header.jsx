import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

export const Header = () => {
  return (
    <div className="image-container">
      <img src="/images/image01.png" className='image01' alt="Barra Grande Piauí" />
      <div className="centered-text">Barra Grande</div>
    </div>
  );
};
