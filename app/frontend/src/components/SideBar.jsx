import React from 'react';
import logo from '../assets/logo.png';
import maos from '../assets/maos.png';

import '../style/invoices.css';

const Sidebar = () => {
  return (


    <aside>
      <img className='logo' src={logo} alt="aperto de maos" />

      <div className="d-flex align-items-center">
        <div className="menu">
          <img src={maos} alt="aperto de mãos" />
        </div>
        <div className="notas-fiscais ms-2">
          <p className='notas-fiscais-sidebar'>Notas fiscais</p>
        </div>
      </div>
    </aside>


  );
};

export default Sidebar;
