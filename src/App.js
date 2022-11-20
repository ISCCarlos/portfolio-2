import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Header />
        <MenuBar />
        <About />
      </div>
    </div>
  );
}

export default App;
