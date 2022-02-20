import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import '../../styles/Header.css';

const Header = () => {
  const { state: {cart}} = useContext(AppContext)
  return <div className="Header">
    <h1 className="Header-title">
      <Link to="/">PlatziConf Merch</Link>
    </h1>
    <div className="Header-checkout">
      <Link to="/checkout"><i className="fas fa-shopping-basket" />{cart.length || ''}</Link>
    </div>
  </div>
};

export default Header;
