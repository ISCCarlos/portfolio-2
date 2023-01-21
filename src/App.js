import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import SideMenu from "./components/SideMenu";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App-body">
      <SideMenu />
      <Header id="home" />
      <About id="about" />
      <TechStack id="techStack" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
