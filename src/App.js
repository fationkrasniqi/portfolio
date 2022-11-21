import './App.css';
import './home.scss';
import edited from "../src/Images/edited.jpg"

function App() {
  return (
    <div className="container">
   <div className="header">
      <div className="left">
      <h1 className="text">FATION KRASNIQI</h1>
      </div>
      <div className="right">
      <a href="https://github.com/fationkrasniqi" target="_blank">github</a>
      <a href="mailto:fationkrasniqi777@gmail.com">mail</a>
     <a href="https://www.linkedin.com/in/fation-krasniqi/" target="_blank">linkedin</a>
     </div>
   </div>
  <div className="profile">
          <div className="left1">
          <h1>Front-end Developer</h1>
         <h1 className="test">Hello, I’m Fation.
          I’m a React Front-end Developer and an overall web enthusiast experienced in building all aspects of the user experience and user interfaces.
   </h1>
   <h1 className="test">
         I design and develop performant beautiful experiences that make people’s lives simple. I’m highly inspired by the antique.
   </h1>
         <h1 className="skills">Skills</h1>
         <h3>Javascript / React.js</h3>
         <h3>REST API, Graph QL</h3>
         <h3>SASS ⋅ Material/Chakra UI ⋅ Styled-components</h3>
         </div>
         <div className="right2">
          <h3 className="error">ERROR 404</h3>
         <img src={edited} alt="new"/>
         
         </div>

  </div>
   <div className="resume">
   <div className="work">
           <h1>Work experience</h1>
           <h3 >Starlabs internship</h3>
           <h5>Front-end Developer | April 2022 - Jun 2022 </h5>

           <h3>Freelance</h3>
           <h5>Front-end Developer | 2021 - Present</h5>
   </div>
   <div className="projects">
    <h1>Portfolio</h1>
    <a href="https://github.com/fationkrasniqi/foodorder" target="_blank">FoodOrder</a>
    <h3>As part of Starlabs internship, we the group of interns developed this e-commerce platform.This project is developed on the idea that every business that wishes to sell online products can use this web app. Food Order Website using MERN Stack</h3>
    <a href="https://movie.fationkrasniqi.dev/" target="_blank">Movie</a>
    <h3>Movie App is a ReactJS web application developed to display information about any movie. It's built on top of TMDB API, with a great UX, very functional and a Mobile-First design.</h3>
    <a href="https://github.com/fationkrasniqi/" target="_blank">Onlineshop</a>
    <h3>Comming soon</h3>

   </div>
   </div>
   <div className="footer">
     <a href="https://www.linkedin.com/in/fation-krasniqi/" target="_blank">linkedin</a>
     <a href="https://github.com/fationkrasniqi" target="_blank">github</a>
     <a href="mailto:fationkrasniqi777@gmail.com">mail</a>

     
   </div>
     
   </div>
  );
}

export default App;
