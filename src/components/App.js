import Header from "./header/Header";
import Home from "./home/Home";
import Main from "./aboutMe/Container";
import Project from "./projects/Project";
import ContactMe from "./contact/ContactMe";
import Technical from "./techical/Technical";
import Education from "../components/education/Education"


function App() {
  return (
    <div className="App ">
    <Header />
    <Home />
    <Main />
    <Project />
    <Technical />
    <Education />
    <ContactMe />
    </div>
  );
}

export default App;
