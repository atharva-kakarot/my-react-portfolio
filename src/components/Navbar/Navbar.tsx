import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="nav-bar">
      <div id="links-div">
        <Link to="/" className="links">
          <span className="links-text">Home</span>
        </Link>
        <Link to="/skills" className="links">
          <span className="links-text">Skills</span>
        </Link>
        <Link to="/projects" className="links">
          <span className="links-text">Projects</span>
        </Link>
      </div>
      <div id="icons-div">
        <a
          href={"https://github.com/atharva-kakarot"}
          target={"_blank"}
          className="links"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href={"https://www.linkedin.com/in/Atharva-Karanjekar"}
          target={"_blank"}
          className="links"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href={"mailto:atharva.kakarot@gmail.com"}
          target={"_blank"}
          className="links"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href={
            "https://www.instagram.com/karanjekar_atharva?igsh=MWk2NXlqbmMOamw%Yw=="
          }
          target={"_blank"}
          className="links"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
