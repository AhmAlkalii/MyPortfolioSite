import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useContext } from 'react'
import Home from './pages/Home';
import Projects from './pages/Projects';
// import Experience from './pages/Experience';
import Footer from './Components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import { ThemeContext } from './context/theme';
import Header from './Components/Header';
import Certificate from './pages/Certificate';
import Skills from './pages/Skills';

function App() {
  const [{ themeName }] = useContext(ThemeContext)


  return (
    <div id='top' className={`${themeName} app`}>
      <Router>
        <Header/>
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} /> 
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/skills" element={<Skills />} />
          
        </Routes>
        <Footer />
      </Router>      
    </div>
  );
}

export default App;
