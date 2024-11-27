import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { getCocktailCodes } from "Slices/cocktails";
import { uncapitalizeFirstLetter } from "Utils";

import "./NavbarComponent.styl";

export const NavbarComponent: React.FC = () => {
  const cocktailCodes = useSelector(getCocktailCodes);

  return (
    <nav className="nav">
      <ul className="ul">
        {cocktailCodes.map((cocktailCode) => (
          <li key={cocktailCode} className="li">
            <NavLink
              to={`/${uncapitalizeFirstLetter(cocktailCode)}`}
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              {cocktailCode}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
