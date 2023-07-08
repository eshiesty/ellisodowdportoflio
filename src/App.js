import logo from "./logo.svg";
import "./App.css";
import Landing from "./Components/Landing";
import Skills from "./Components/Skills";
import Links from "./Components/Links";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectsCollapsable from "./Components/ProjectsCollapsable";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Landing />
                <Skills />
                <Links />
                {/* <Projects /> */}
                <ProjectsCollapsable />
              </div>
            }
          ></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
