import { useState } from "react";
import Header from "./header/Header";
import Home from "./home/Home";
import Main from "./aboutMe/Container";
import Project from "./projects/Project";
import ContactMe from "./contact/ContactMe";
import Technical from "./techical/Technical";
import Education from "../components/education/Education"
import WorkExperienceMain from "./workExperience/WorkExperienceMain";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${darkMode && "dark"} App overflow-hidden`}>
    <button className="w-22 h-10 z-50 fixed right-0" onClick={toggleDarkMode}>
    {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
    <Header />
    <Home darkMode={darkMode}/> {/* To Reset Typing component */} 
    <Main />
    <WorkExperienceMain />
    <Project />
    <Technical />
    <Education />
    <ContactMe />
    </div>
  );
}

export default App;
