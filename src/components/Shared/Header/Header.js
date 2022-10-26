import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/mern-logo.png'



const Header = () => {
    return (
   
<Navbar className='bg-gray-200'
  fluid={true}
  rounded={true}
>
  <Navbar.Brand >
    <img
      src={logo}
      className="mr-3 md:h-20 sm:h-10  w-20"
      alt="Mern Stack Logo"
    />
    <span className="self-center whitespace-nowrap sm:text-3xl font-oswald text-blue-600 text-xl">
      <Link to='/'> 
      Mern Station</Link>
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

    );
};

export default Header;