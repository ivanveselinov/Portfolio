import Header from "./header/Header";
import Home from "./home/Home";
import Main from "./aboutMe/Container";
import Project from "./projects/Project";
import ContactMe from "./contact/ContactMe";
import Experience from "./experience/Experience";



function App() {
  return (
    <div className="App overflow-y-auto scrollbar-hide">
    <Header />
    <Home />
    <Main />
    <Project />
    <Experience />
    <ContactMe />
    </div>
  );
}

export default App;
