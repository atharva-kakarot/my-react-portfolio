import "bootstrap/dist/css/bootstrap.min.css";
import "./Jumbotron.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div id="text-div">
        <div className="typewriter">
          <h1 className="display-4">Hi! I'm Atharva.</h1>
        </div>
        <p className="lead">
          I am a passionate Web Developer looking for opportunities to showcase
          and further develop my skills!
        </p>
        <p className="lead">
          <a
            className="btn btn-primary btn"
            href="#"
            role="button"
            style={{
              backgroundColor: "#00FF00",
              border: "none",
              fontSize: "0.7em",
              color: "black",
              fontWeight: "500",
            }}
          >
            Know more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
