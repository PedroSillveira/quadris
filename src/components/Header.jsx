import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

export const Header = () => {
  return (
    <div className="image-container">
      <img src="/images/image01.png" className='image01' alt="Barra Grande Piauí" />
      <div className="centered-text">
        <legend className='text-center'>CONHEÇA</legend>
        <h1 className='text-center'>BARRA GRANDE</h1>
        <legend className='text-center'>COM EMOÇÃO!</legend>
      </div>
    </div>
  );
};
