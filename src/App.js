import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div id="home">
          <Header />
        </div>
        <MenuBar />
        <div
          data-bs-spy="scroll"
          data-bs-target="#main-navbar"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          className="scrollspy-example bg-light p-3 rounded-2"
          tabindex="0"
        >
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
      </div>
    </div>
  );
}

export default App;
