import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const routes = [
  ["Solutions", "/solutions"],
  ["Contact", "/contact"],
  ["Login", "/login"],
];

const Navbar = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left uk-margin-left">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink to="/">
              <img
                data-src={logo}
                width="48"
                height="48"
                alt=""
                data-uk-img=""
                uk-image="true"
              />
              LOGO
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right uk-margin-right">
        <ul className="uk-navbar-nav">
          {routes.map((route, index) => {
            return (
              <li key={index}>
                <NavLink to={`${route[1]}`}>{route[0]}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
