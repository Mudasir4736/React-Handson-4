import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='Navbar'>
         
          <Link to="/">Home</Link>  
         
          <Link to="/student-details">Student Details</Link>  
         
          <Link to="/contact">Contact Us</Link>  
        
      </div>
    );
}

export default Nav;
