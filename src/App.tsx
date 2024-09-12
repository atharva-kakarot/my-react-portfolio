import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Jumbotron from "./components/Jumbotron/Jumbotron";

function App() {
  return (
    <div>
      <Navbar />
      <Home>
        <Jumbotron />
      </Home>
    </div>
  );
}

export default App;
