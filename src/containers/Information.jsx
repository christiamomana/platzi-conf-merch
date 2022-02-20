import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/Information.css';

const Information = () => {
  const { state: { cart}, addToBuyer} = useContext(AppContext)

  const formRef = useRef(null);

  return <div className="Information">
    <div className="Information-content">
      <div className="Information-head">
        <h2>Informacion de contacto</h2>
      </div>
      <div className="Information-form">
        <form ref={formRef}>
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Corre electronico" name="email" />
          <input type="text" placeholder="Dirección" name="address" />
          <input type="text" placeholder="apto" name="apto" />
          <input type="text" placeholder="Ciudad" name="city" />
          <input type="text" placeholder="Pais" name="country" />
          <input type="text" placeholder="Departamento" name="state" />
          <input type="text" placeholder="Codigo Postal" name="cp" />
          <input type="text" placeholder="Telefono" name="Phone" />
        </form>
      </div>
      <div className="Information-buttons">
        <div className="Information-back">Regresar</div>
        <Link onClick={() => {addToBuyer()}}>
          <div className="Information-next">Pagar</div>
        </Link>
      </div>
    </div>
    <div className="Information-sidebar">
      <h3>Pedidos</h3>
      <div className="Information-item">
        <div className="Information-element">
          <h4>Item name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  </div>
};

export default Information;
