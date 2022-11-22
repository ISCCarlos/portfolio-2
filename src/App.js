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
        <Header />
        <MenuBar />
        <div className="page-content">
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
