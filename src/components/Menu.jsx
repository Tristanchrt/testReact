import React from "react";
import '../css/menu.css';
import {Link} from 'react-router-dom';

const navStyle = {
  color: 'white'
}

const Menu = () => (
  <nav className="menu">
    <Link style={navStyle} to="/">
      <h3>Home</h3>
      </Link>
    <ul className="menu-link">
      <Link style={navStyle} to="/Shop">
        <li>Shop</li>
      </Link>
      <Link style={navStyle} to="/Connexion">
        <li>Connexion</li>
      </Link>
      <Link style={navStyle} to="/Client">
        <li>Client</li>
      </Link>
    </ul>
  </nav>
);

export default Menu;
