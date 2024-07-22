import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                    <GitHubIcon />
                </a>
            </div>

        </div>

        <div className='skills'>
            <h1 className='sh1'>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Programming Languages</h2>
                    <span>JavaScript, Python, C#, C++, TypeScript</span>
                </li>
                <li className="item">
                    <h2>Web and Mobile Development</h2>
                    <span>React.js, Node.js, Angular, HTML, CSS, React Native, .NET Framework</span>
                </li>
                <li className="item">
                    <h2>Backend Development</h2>
                    <span>.NET Framework, Node.js, Flask</span>
                </li>
                <li className="item">
                    <h2>Database Management</h2>
                    <span>MongoDB, SQLite3, SQL</span>
                </li>
                <li className="item">
                    <h2>Version Control</h2>
                    <span>Git, GitHub, Azure DevOps</span>
                </li>
                <li className="item">
                    <h2>API Testing</h2>
                    <span>Postman</span>
                </li>
                <li className="item">
                    <h2>Data Science and Machine Learning</h2>
                    <span>Pandas, NumPy, SciKit-Learn, Matplotlib, Seaborn, Spark, NLP</span>
                </li>
                <li className="item">
                    <h2>Office Skills</h2>
                    <span>Microsoft Word, Excel, PowerPoint</span>
                </li>
            </ol>
        </div>


        <div className='certs'>
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
        </div>

    </div>
  )
}

export default Home





