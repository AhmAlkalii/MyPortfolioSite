# Personal Online Portfolio

## Overview

This project is a personal online portfolio developed using React. It showcases my coding skills, experiences, and personal projects. The portfolio includes various sections such as an introduction, a detailed about page, a list of projects, and a contact page.

## Features

- **Home Page**: 
  - Introduction to the user with a brief description and links to LinkedIn, GitHub, and email.
  - Display of key skills and certifications.

- **Experience Page**: 
  - Displays educational and work experiences using a vertical timeline format.

- **Projects Page**: 
  - Lists personal projects with images, descriptions, and links to the project repositories or live sites.

- **Project Display Page**: 
  - Detailed view of each project with information on technologies used, and links to the GitHub repository and live site.

## Technologies Used

- **React**: For building the interactive user interface.
- **Material-UI**: For icons (e.g., LinkedIn, GitHub).
- **React Vertical Timeline**: For displaying experience in a timeline format.
- **CSS**: For styling and layout.

## Installation

1. **Clone the Repository**

   git clone https://github.com/AhmAlkalii/PersonalPortfolioWebsite.git


2. **Navigate to the Project Directory**
    cd Personal-Online-Portfolio

3. **Install Dependencies**

npm install

4. **Run the Development Server**
    npm run dev

## Project Structure

- **`src/`**: Contains the main source code.
  - **`components/`**: React components for different sections of the portfolio.
    - `Experience.js`: Displays educational and work experience.
    - `Home.js`: Displays the home page with introduction and skills.
    - `ProjectDisplay.js`: Displays detailed information for a single project.
    - `Projects.js`: Lists all personal projects.
    - `ProjectItem.js`: Renders individual project items.
  - **`helpers/`**: Contains helper files.
    - `ProjectList.js`: Defines a list of projects with details.
  - **`assets/`**: Stores images used in the project.
  - **`Styles/`**: Contains CSS files for styling.
