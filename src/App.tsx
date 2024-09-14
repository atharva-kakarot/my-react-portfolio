import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

const App: React.FC = () => {
  return (
    <Router basename="/my-react-portfolio/">
      <Navbar />
      <Home>
        <Routes>
          <Route path="" element={<Jumbotron />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </Home>
    </Router>
  );
};

export default App;
