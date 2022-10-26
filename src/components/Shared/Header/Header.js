import { faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/mern-logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";



const Header = () => {

const {user} = useContext(AuthContext)
console.log(user);

const [dark, setDark] = useState(false);

const handleTheme = () => {
  setDark(!dark)
}

    return (


<Navbar className="bg-zinc-200"  fluid={true} rounded={true}>

<Navbar.Brand>
 <Link>
 <img
    src={logo}
    className="mr-3 md:h-20 sm:h-10  w-20"
    alt="Mern Stack Logo"
  /></Link>
  <span className="self-center whitespace-nowrap sm:text-3xl font-oswald text-blue-600 text-xl font-bold">
    <Link to="/"><span className="text-black">MERN</span> Station</Link>
  </span>
  </Navbar.Brand>

  <Navbar.Toggle />
  <Navbar.Collapse>

 <NavLink className='text-lg py-1' to = "/courses"> Courses </NavLink>

 <NavLink className='text-lg py-1' to="faq"> FAQ </NavLink>

  <NavLink className='text-lg py-1' to ='blog'> Blog </NavLink>

  <NavLink onClick={handleTheme}  className='text-lg py-1 md:border border-dotted border-black  px-2 '>
  {
    dark ? <p > Light <FontAwesomeIcon icon={faSun} /> </p>
    : <p className=""> Dark <FontAwesomeIcon  icon={faMoon}/></p>
    
    
  } 
  </NavLink>
 <NavLink to="/login" className='text-lg'>
  {
  user?.uid ?  <>
  {user.displayName}</> 
  :
    <button className="bg-black text-white py-1 px-6">
  Login
 </button>
  }
  </NavLink>
</Navbar.Collapse>
</Navbar>


    )
};

export default Header;
