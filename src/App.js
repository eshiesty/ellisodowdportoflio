import logo from "./logo.svg";
import "./App.css";
import Landing from "./Components/Landing";
import Skills from "./Components/Skills";
import Links from "./Components/Links";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
function App() {
  return (
    <div className="App">
      <Landing />
      <Skills />
      <Links />
      <Projects />
      {/* <AboutMe /> */}
    </div>
  );
}

export default App;
