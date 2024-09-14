import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "./Projects.css";

interface Props {
  title: string;
  img: string;
  text: string;
  link: string;
}

interface Props {}

const Card = ({ title, img, text, link }: Props) => {
  return (
    <div className="project-card">
      <img src={`img/${img}.jpeg`} className="card-img" />
      <div className="project-card-body">
        <h5 className="project-card-title">{title}</h5>
        <p className="project-card-text">{text}</p>
        <a href={`${link}`} className="project-links" target={"_blank"}>
          <span className="project-button">
            <i
              className="fa-brands fa-github"
              style={{ fontSize: "1.5em" }}
            ></i>
            GitHub
          </span>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="project-cards-div">
      <Card
        img="animemiru"
        title="AnimeMiru"
        text="A simple anime information library app made using pure HTML, CSS, JavaScript and AniList API."
        link="https://github.com/atharva-kakarot/AnimeMiru"
      />
      <Card
        img="weatherapp"
        title="Simple Weather App"
        text="A simple weather app made using HTML, CSS, Django and OpenWeather API."
        link="https://github.com/atharva-kakarot/simple-weather-app"
      />
      <a
        href={"https://github.com/atharva-kakarot?tab=repositories"}
        target={"_blank"}
        id="view-more"
      >
        view more
      </a>
    </div>
  );
};

export default Projects;
