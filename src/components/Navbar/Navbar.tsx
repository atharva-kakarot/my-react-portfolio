import "./navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <div id="nav-bar">
      <div id="links-div">
        <a href="#home" className="links">
          <span>About</span>
        </a>
        <a href="#home" className="links">
          <span>Skills</span>
        </a>
        <a href="#home" className="links">
          <span>Projects</span>
        </a>
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
