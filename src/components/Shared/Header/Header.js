import { faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/mern-logo.png";



const Header = () => {
  
const [dark, setDark] = useState(false);

const handleTheme = () => {
  setDark(!dark)
}

    return (


<Navbar className="bg-zinc-200"  fluid={true} rounded={true}>

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


  
 <NavLink className='text-lg py-1' to = "/courses"> Courses </NavLink>

 <NavLink className='text-lg py-1' to="faq"> FAQ </NavLink>

  <NavLink className='text-lg py-1' to ='blog'> Blog </NavLink>

  <NavLink onClick={handleTheme}  className='text-lg py-1 border border-dotted border-black  px-2 '>
  {
    dark ? <p > Light <FontAwesomeIcon icon={faSun} /> </p>
    : <p className=""> Dark <FontAwesomeIcon  icon={faMoon}/></p>
    
    
  } 
  </NavLink>

 <NavLink to="/login" className='text-lg'>
  <button className="bg-black text-white py-1 px-6">
  Login
 </button>
  </NavLink>

</Navbar.Collapse>
</Navbar>


    )
};

export default Header;
