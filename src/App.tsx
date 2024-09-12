import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home>
        <Jumbotron />
        <Skills />
      </Home>
    </div>
  );
}

export default App;
