import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/Home.css";


function Home() {
  const email = 'hmkalkali@gmail.com';
  
  return (
    <div className='about center'>

        <h2> Hi, My Name is Ahmed Mohammed</h2>
        <h2 className='about__role'>An IT Student.</h2>


        <p className='about__desc'>
            I'm a dedicated IT student with a strong interest in software 
            development, both frontend and backend, as well as data science 
            and machine learning. I enjoy learning new technologies and 
            applying my skills in practical projects, such as developing 
            web solutions using React and analyzing data with Python. 
            Check out my resume to learn more about my skills and experience!
        </p>

        <div className='about__contact center'>
            <a href='https://www.canva.com/design/DAGLamlm3W0/vF7_rZC9xKpe0MgmGUX5LA/view?utm_content=DAGLamlm3W0&utm_campaign=designshare&utm_medium=link&utm_source=editor'>
                <span type='button' className='btn btn--outline'>
                Resume
                </span>
            </a>
            
            <a href="https://www.linkedin.com/in/ahmed-mohammed-alkali-959a18265" target="_blank" rel="noopener noreferrer" className='link link--icon'>
                <LinkedInIcon />
            </a>
            <a href={`mailto:${email}`} className='link link--icon'>
                <EmailIcon />
            </a>
            <a href={"https://github.com/AhmAlkalii"} target="_blank" className='link link--icon' rel="noopener noreferrer">
                <GitHubIcon />
            </a>
        </div>

        




        {/* <div className='certs'>
            <h1 className='ch1'>Certifications</h1>
            <ol className="list">
                <li className="item"><h4>CPA - Programming Essentials in C++ - Cisco (2023)</h4></li>
                <li className="item"><h4>NDG Linux Essentials - Cisco (2023)</h4></li>
                <li className="item"><h4>NDG Linux Unhatched - Cisco (2023)</h4></li>
                <li className="item"><h4>JavaScript Essentials 1 (JSE) - Cisco (2023)</h4></li>
                <li className="item"><h4>Introduction to Networks - Cisco (2023)</h4></li>
                <li className="item"><h4>Programming Essentials in Python - Cisco (2023)</h4></li>
                <li className="item"><h4>Introduction to Data Science - Cisco (2023)</h4></li>
                <li className="item"><h4>Python for Data Science and Machine Learning Bootcamp - Udemy (2024)</h4></li>
            </ol>
        </div> */ }

    </div>
  )
}

export default Home





