import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Projects from "./components/Projects";
import SideMenu from "./components/SideMenu";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App-body">
      <MenuBar />
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
