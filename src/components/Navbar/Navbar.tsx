import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="nav-bar">
      <div id="links-div">
        <Link to="/" className="links">
          <span>Home</span>
        </Link>
        <Link to="/skills" className="links">
          <span>Skills</span>
        </Link>
        <Link to="" className="links">
          <span>Projects</span>
        </Link>
      </div>
      <div id="icons-div">
        <a href="" className="links">
          <i className="bi bi-github"></i>
        </a>
        <a href="" className="links">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="" className="links">
          <i className="bi bi-envelope"></i>
        </a>
        <a href="" className="links">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
