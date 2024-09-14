import "bootstrap/dist/css/bootstrap.min.css";
import "./Jumbotron.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import profilepic from "./img/profilepic.png";

const Jumbotron: React.FC = () => {
  return (
    <div id="jumbotron-div">
      <div className="jumbotron">
        <div id="outermost-text-div">
          <div id="text-div">
            <h1 className="display-4">
              Hi! I'm{" "}
              <small
                style={{
                  display: "inline",
                  color: "lime",
                  fontSize: "1.04em",
                }}
              >
                Atharva
              </small>
              .
            </h1>
            <p className="lead">
              I am an aspiring Web Developer looking for opportunities to
              showcase and further develop my skills!
            </p>
            <p className="lead">
              <a
                className="btn btn-primary btn"
                id="know-more-btn"
                href={"https://www.linkedin.com/in/Atharva-Karanjekar"}
                target={"_blank"}
                role="button"
              >
                Know more
              </a>
            </p>
          </div>
          <img src={profilepic} id="profile-img" />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
