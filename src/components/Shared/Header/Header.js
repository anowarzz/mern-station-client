
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/mern-logo.png";

const Header = () => {
  return (
    <Navbar className="bg-gray-200"  fluid={true} rounded={true}>

      <Navbar.Brand>
        <img
          src={logo}
          className="mr-3 md:h-20 sm:h-10  w-20"
          alt="Mern Stack Logo"
        />
        <span className="self-center whitespace-nowrap sm:text-3xl font-oswald text-blue-600 text-xl">
          <Link to="/">Mern Station</Link>
        </span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>

        <NavLink className='text-lg' to = "/courses"> Courses </NavLink>

        <NavLink className='text-lg' to="faq"> FAQ </NavLink>

        <NavLink className='text-lg' to ='blog'> Blog </NavLink>

        <NavLink className='text-lg' to>
         <p className="border border-dotted border-black px-2"> Dark <FontAwesomeIcon  icon={faMoon}/></p>
           </NavLink>

        <Navbar.Link to="/login">
          <button className="bg-black text-white text-lg "></button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
