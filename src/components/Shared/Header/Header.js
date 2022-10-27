import { faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";

import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/mern-logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import 'react-tippy/dist/tippy.css'
import {Tooltip,} from 'react-tippy';
 
const Header = () => {
  const { user, logOut } = useContext(AuthContext);


  const [dark, setDark] = useState(false);

  const handleTheme = () => {
    setDark(!dark);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar className="bg-slate-200" fluid={true} rounded={true}>
        <NavLink to = '/' className="flex">
            <img
              src={logo}
              className="mr-3 md:h-20 sm:h-15  w-20"
              alt="Mern Stack Logo"
            />
          <h5 className="self-center whitespace-nowrap sm:text-3xl font-oswald text-black text-xl font-bold">
              <span className="text-purple-600">MERN</span> Station
          </h5>
        </NavLink>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="flex flex-col md:flex-row justify-between md:gap-4 items-center">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-lg py-1 px-3 text-blue-500 hover:bg-[#03396b] hover:text-white" : "text-lg py-1 hover:bg-[#03396b] px-3 hover:text-white "
              }
              to="/home"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "text-lg py-1 px-3  text-blue-500 hover:bg-[#03396b] hover:text-white" : "text-lg py-1 hover:bg-[#03396b] px-3 hover:text-white"
              }
              to="/courses"
            >
              Courses
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "text-lg py-1 px-3 text-blue-500 hover:bg-[#03396b] hover:text-white" : "text-lg py-1 hover:bg-[#03396b] px-3 hover:text-white"
              }
              to="/faq"
            >
              FAQ
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-lg py-1 px-3 text-blue-500 hover:bg-[#03396b] hover:text-white" : "text-lg py-1 hover:bg-[#03396b] px-3 hover:text-white"
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/checkout"
              className={({ isActive }) =>
                isActive ? "text-lg py-1 px-3 text-blue-500 hover:bg-[#03396b] hover:text-white" : "text-lg py-1 hover:bg-[#03396b] hover:text-white px-3"
              }
            >
              Checkout
            </NavLink>

            <NavLink
              onClick={handleTheme}
              className="text-lg py-1  border-black hover:text-white md:px-2 mb-2 md:mb-0 hover:bg-[#03396b] px-3"
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

            {user?.uid ? (
              <> 
                { user.photoURL?
                 <Tooltip 
                 theme="light"
                 title={user?.displayName ? user?.displayName : "User"}
                 position="bottom" >
                   <img
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                  className="rounded-full mb-4 md:mb-0"
                  src={user?.photoURL}
                  />
                 </Tooltip>
                 : <FontAwesomeIcon className="text-lg" icon={faUser} />
                }

                <button
                  onClick={handleLogOut}
                  className="bg-red-500 text-black py-2 px-6  hover:bg-red-700"
                >
                  Log Out
                </button>
              </>
            ) : (
              <NavLink to="/login" className="text-lg">
                <button className="bg-black text-white py-1 px-6  hover:bg-teal-400 hover:text-black">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
