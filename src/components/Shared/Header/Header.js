import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import { NavbarBrand } from "flowbite-react/lib/esm/components/Navbar/NavbarBrand";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/mern-logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);


  const [dark, setDark] = useState(false);

  const handleTheme = () => {
    setDark(!dark);
  };

  return (
    <Navbar className="bg-slate-200" fluid={true} rounded={true}>
      <NavbarBrand>
        <Link>
          <img
            src={logo}
            className="mr-3 md:h-20 sm:h-15  w-20"
            alt="Mern Stack Logo"
          />
        </Link>
        <span className="self-center whitespace-nowrap sm:text-3xl font-oswald text-black text-xl font-bold">
          <Link to="/">
            <span className="text-purple-600">MERN</span> Station
          </Link>
        </span>
      </NavbarBrand>

      <Navbar.Toggle />
      <Navbar.Collapse>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-lg py-1 text-blue-500" : "text-lg py-1 "
          } to="/home">
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-lg py-1 text-blue-500" : "text-lg py-1 "
          }
          to="/courses"
        >
          Courses
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "text-lg py-1 text-blue-500" : "text-lg py-1 "
          }
          to="faq"
        >
          FAQ
        </NavLink>

        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive ? "text-lg py-1 text-blue-500" : "text-lg py-1 "
          }
        >
      
          Blog
        </NavLink>

        <NavLink
          onClick={handleTheme}
          className="text-lg py-1 md:border border-dotted border-black md:px-2"
        >
          {dark ? (
            <p>
              Light <FontAwesomeIcon icon={faSun} />
            </p>
          ) : (
            <p className="">
            
              Dark <FontAwesomeIcon icon={faMoon} />
            </p>
          )}
        </NavLink>


        <NavLink to="/login" className="text-lg">
          {user?.uid ? (
            <>{user.displayName}</>
          ) : (
            <button className="bg-black text-white py-1 px-6  hover:bg-teal-400 hover:text-black">
              Login
            </button>
          )}
        </NavLink>






      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
