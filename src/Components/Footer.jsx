import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
          <a href={"https://twitter.com/AhmedAlkalii"} target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-mohammed-alkali-959a18265" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
        
        <p> &copy; 2023 Ahmed Alkali Mohammed | Contact: hmkalkali@gmail.com  </p>
    </div>
  )
}

export default Footer


