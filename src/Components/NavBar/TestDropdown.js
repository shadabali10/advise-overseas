import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
// import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import "./navbarstyle.css";
import SubNavigation from "./SubNavigation";

function Dropdown({ dropdown }) {
  const [click, setClick] = useState(false);
  const [subnav, setSubNav] = useState(dropdown);
  const handleClick = () => setClick(!click);
  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setSubNav(false);
    } 
    // else {
    //   setSubNav(true);
    // }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setSubNav(false);
    } 
    // else {
    //   setSubNav(false);
    // }
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        // className="dropdown-menu"
      >
        {MenuItems.map((item, index) => {
          return (
            <li
              key={index}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="text-base"
            >
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                // onClick={() => setSubNav(!subnav)}
              >
                {item.title}
              </Link>
              {subnav &&
                item.subNav.map((item, index) => {
                  return <SubNavigation key={index} item={item} />;
                })}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
