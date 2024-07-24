import React, { useEffect, useState,useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/theme';
import "../Styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';

function Navbar() {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    const [expandNavbar,setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    },[location])

    
  return (
    <div className='navbar' id={expandNavbar ? "open":"close"}>
      <div className='toggleButton'>
        <button onClick={() => {setExpandNavbar((prev) => !prev);}}> 
            <ReorderIcon/> 
        </button>
      </div>
      <div className='links'>

        <Link to="/skills" className='link link--nav'>Skills</Link>
        <Link to="/projects" className='link link--nav'>Projects</Link>
        {/* <Link to="/experience" className='link link--nav'>Experience</Link> */}
        <Link to="/certificate" className='link link--nav'>Certificate</Link>
        

        <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
        >
          {themeName === 'dark' ? <WbSunnyIcon /> : <Brightness2Icon />}
        </button>

      </div>
    </div>
  );
}

export default Navbar;
