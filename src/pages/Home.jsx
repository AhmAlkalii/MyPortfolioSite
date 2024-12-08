import React, {useEffect} from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/Home.css";
import Skills from './Skills'
import Typed from 'typed.js';
import Contact from './Contact';
import one from '../assets/4.jpeg'

function Home() {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['IT student','Nigerian', '21 year old','Data Science and Machine Learning Enthusiast', 'Software Developer','Video Games Lover','Football fan' ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup function to destroy Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className='about center'>

        <img src={one} alt="Ahmed Mohammed" className="profile-pic" />

        <h2> Hi, My Name is Ahmed Mohammed</h2>
        <h3 className='about__role'>I am a <span className="multiple-text"></span></h3>

        <p className='about__desc'>
        
        I am an enthusiastic IT student with a strong passion for software development, 
        focusing on both frontend and backend technologies. I enjoy creating user-friendly, 
        responsive web applications using modern tools and frameworks like React, 
        and I have experience building scalable systems that solve real-world challenges.
        </p>

        <p className='about__desc'>

        Working on diverse projects has strengthened my problem-solving skills 
        and taught me the importance of effective collaboration and communication within teams. 
        I am always eager to explore new technologies and apply them to meaningful projects. 
        </p>
        <p className='about__desc'>

        Check out my resume to learn more about my technical expertise and experience!

        </p>

        <div className='about__contact center'>
            <a href='https://www.canva.com/design/DAGPOwBb5Bg/7f7Q-CsNzosyMSLAf0LQlA/view?utm_content=DAGPOwBb5Bg&utm_campaign=designshare&utm_medium=link&utm_source=editor'>
                <span type='button' className='btn btn--outline'>
                Resume
                </span>
            </a>
            
            <a href="https://www.linkedin.com/in/ahmed-mohammed-alkali" target="_blank" rel="noopener noreferrer" className='link link--icon'>
                <LinkedInIcon />
            </a>
            <a href={"https://github.com/AhmAlkalii"} target="_blank" className='link link--icon' rel="noopener noreferrer">
                <GitHubIcon />
            </a>
            <a href={"https://twitter.com/AhmedAlkalii"} className='link link--icon' target="_blank" rel="noopener noreferrer">
            <XIcon />
            </a>
        </div>

        <Contact/>
    </div>
  )
}

export default Home





