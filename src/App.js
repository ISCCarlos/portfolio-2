import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <Header />
        <MenuBar />
        <About />
      </body>
    </div>
  );
}

export default App;
