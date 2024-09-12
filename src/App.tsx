import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Skills from "./components/Skills/Skills";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Home>
          <Routes>
            <Route path="/" element={<Jumbotron />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Home>
      </div>
    </Router>
  );
};

export default App;
