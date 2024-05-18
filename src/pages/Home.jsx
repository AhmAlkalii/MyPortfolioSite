import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../Styles/Home.css";

function Home() {
  const email = 'hmkalkali@gmail.com';
  
  return (
    <div className='home'>
        <div className='about'>
            <h2> Hi, My Name is Ahmed</h2>

            <div className="prompt">
                <p>A Computer Science Student with a passion for learning, coding and creating.</p>
                <a href="https://www.linkedin.com/in/ahmed-mohammed-alkali-959a18265" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href={`mailto:${email}`}>
                    <EmailIcon />
                </a>
                <a href={"https://github.com/AhmAlkalii"} target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                </a>
            </div>

        </div>

        <div className='skills'>
            <h1> Skills</h1>

            <ol className="list">

                <li className="item">
                    <h2> Front-End</h2>
                    <span>
                    React Native, Angular, HTML, CSS, BootStrap, TailwindCSS, StyledComponents and MERN stack (MongoDB, Express.js, React.js, Node.js)
                    </span>
                </li>

                <li className="item">
                    <h2>Back-End</h2>
                    <span>
                    NodeJS, .NET, MongoDB, SQLite3, Basic RESTful API Concepts,Server Deployment
                    </span>
                </li>

                <li className="item">
                    <h2>Languages</h2>
                    <span>JavaScript, Python, C#, C++, TypeScript</span>
                </li>

                <li className="item">
                    <h2>Office Skills</h2>
                    <span>Microsoft Word, Microsoft Excel, Microsoft PowerPoint</span>
                </li>
                
            </ol>
        </div>

        <div className='certs'>
            <h1>Cisco NetAcad Certificates </h1>

            <ol className="list">

                <li className="item">
                    <h4>CPA - Programming Essentials in C++</h4>
                </li>

                <li className="item">
                    <h4>CPA - Programming Essentials in C++</h4>
                </li>

                <li className="item">
                    <h4>NDG Linux Essentials</h4>
                </li>

                <li className="item">
                    <h4>NDG Linux Unhatched</h4>
                </li>

                <li className="item">
                    <h4>JavaScript Essentials 1 (JSE)</h4>
                </li>

                <li className="item">
                    <h4>Introduction to Networks</h4>
                </li>

                <li className="item">
                    <h4>Programming Essentials in Python</h4>
                </li>

            </ol>
        </div>
    </div>
  )
}

export default Home





