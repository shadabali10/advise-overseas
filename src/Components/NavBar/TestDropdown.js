import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
// import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import "./navbarstyle.css";
import SubNavigation from "./SubNavigation";

function Dropdown({ dropdown }) {
  const [click, setClick] = useState(false);
  const [subnav, setSubNav] = useState(false);
  const [Snav, setSNav] = useState(false);
  const [KDSubdropdown, setSubDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setSubNav(false);
    } else {
      setSubNav(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setSubNav(false);
    } else {
      setSubNav(false);
    }
  };

  const onSMouseEnter = () => {
    if (window.innerWidth < 768) {
      setSNav(false);
    } else {
      setSNav(true);
    }
  };
  const onSMouseLeave = () => {
    if (window.innerWidth < 768) {
      setSNav(false);
    } else {
      setSubNav(false);
    }
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? "absolute right-72 z-20 w-48 py-0 mt-0 bg-white rounded-md shadow-xl overflow-auto"
            : "absolute right-72 z-20 w-48 py-0 mt-0 bg-white rounded-md shadow-xl overflow-auto"
        }
      >
        {MenuItems.map((item, index) => {
          return (
            <>
              <li
                key={index}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="text-base overflow-auto items-center px-3 py-0  text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <Link
                  className={item.cName}
                  to={item.path}
                  // onClick={() => setClick(false)}
                  // onClick={() => setSubNav(!subnav)}
                >
                  {item.title}
                </Link>
                {subnav &&
                  item.subNav.map((item, index) => {
                    return (
                      <SubNavigation
                        onSubMEnter={onSMouseEnter}
                        onSubMLeave={onSMouseLeave}
                        key={index}
                        item={item}
                      />
                    );
                  })}
              </li>
              <hr class="border-gray-200 dark:border-gray-700 " />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
