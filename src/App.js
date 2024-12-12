import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hockey from "./Components/Hockey";
import Development from "./Components/Development";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Development />}></Route>
          <Route path="/hockey" element={<Hockey />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
