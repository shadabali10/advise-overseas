import React from "react";
import { Link } from "react-router-dom";
import "./navbarstyle.css";

const SubNavigation = ({ item }) => {

  return (
    <ul
      className="block"
    >
      <li className={item.cName}>
      <Link to={item.path}>{item.title}</Link>
      </li>
    </ul>
  );
};

export default SubNavigation;
