import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App-body">
      <div id="home">
        <Header />
      </div>
      <MenuBar />
      <div id="about">
        <About />
      </div>
      <div id="techStack">
        <TechStack />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
