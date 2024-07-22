import cvgen from "../assets/CVgen.png";
import facial from "../assets/Facial.jpg";
import quiz from "../assets/quiz.png";
import dcu from "../assets/dcusite.png"
import todo from "../assets/Todolist.png"
import rent from "../assets/carent.png"
import rnate from "../assets/rnate.jpeg"
import home from '../assets/Home.png'

export const ProjectList = [
  {
    name: "Personal Expense Tracker",
    image: home,
    skills: "ReactJS,NodeJS,Sqlite3",
    site: 'https://homebudgettrackerr.azurewebsites.net/',
    git: 'https://github.com/AhmAlkalii/HomeExpensePlanner'
  },
  {
    name:"Car Rental System (Full Stack)",
    image: rent,
    skills: "Angular, Flask, SQLite, Azure",
    site:'https://passarentalsitetest.azurewebsites.net/home',
    git:'https://github.com/AhmAlkalii/RentalsiteFrontend'
  }, 
  {
    name: "CV Generation Website Frondend + Backend",
    image: cvgen,
    skills: "Python,Angular,OpenAIAPI,Flask,SQL",
    git:'https://github.com/AhmAlkalii/cv-generation-site-frontend'
  },
  {
    name: "Facial Recognition Attendance System",
    image: facial,
    skills: "Python",
    git:'https://github.com/AhmAlkalii/FacialRecognitionAttendanceSystemUsingPython'
  },
  {
    name: "Car Rental Mobile Application(FullStack)",
    image: rnate,
    skills: "React Native, Node and Express JS and Sqlite3",
    git:'https://github.com/AhmAlkalii/CarRental-React-Native-Frontend'
  },
  {
    name: "DCU Fan Website",
    image: dcu,
    skills: "JavaScript,HTML,CSS",
    site:'https://dcufansite.s3.eu-north-1.amazonaws.com/myp/myp.html'
  }
];