import "bootstrap/dist/css/bootstrap.min.css";
import "./Jumbotron.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Jumbotron: React.FC = () => {
  return (
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
            I am an aspiring Web Developer looking for opportunities to showcase
            and further develop my skills!
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
        <img
          src={"src/components/Jumbotron/img/profilepic.png"}
          id="profile-img"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
