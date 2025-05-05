import React from 'react';
import maos from '../assets/maos.png';
import '../style/invoices.css';

const HeaderPage = () => {
  return (
    <div className="header-page">
      <p className='notas-fiscais-header'>
     <img src={maos} alt="aperto de maos" />
        Notas fiscais
      </p>
      <p>Visualize as notas fiscais que você tem.</p>
    </div>
  );
};

export default HeaderPage;

