import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Projects from "./components/Projects";
import SideMenu from "./components/SideMenu";
import TechStack from "./components/TechStack";

function App() {
  const themeLight = createTheme({
    palette: {
      text: {
        primary: "#fafafa",
      },
    },
  });

  return (
    <ThemeProvider theme={themeLight}>
      <div className="App-body">
        <MenuBar />
        <SideMenu />
        <Header />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
