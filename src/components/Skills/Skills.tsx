import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";
import C from "./img/C.png";
import cpp from "./img/cpp.png";
import css3 from "./img/css3.png";
import django from "./img/django.png";
import firebase from "./img/firebase.png";
import git from "./img/firebase.png";
import html5 from "./img/html5.png";
import javascript from "./img/javascript.png";
import mysql from "./img/mysql.png";
import python from "./img/python.png";
import react from "./img/react.png";
import ssms from "./img/ssms.png";

interface Props {
  image: string;
  text: string;
}

const Skill: React.FC<Props> = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

interface Props {}

const Skills: React.FC = () => {
  return (
    <div id="div">
      <div id="table-div">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="row-6">
              <div className="skills-outer-div">
                <h1 className="skills-header">Front-End Development:</h1>
                <div className="skills-div">
                  <Skill image={html5} text="HTML5" />
                  <Skill image={css3} text="CSS3" />
                  <Skill image={javascript} text="JavaScript" />
                  <Skill image={react} text="React" />
                </div>
              </div>
            </div>

            <div className="row-6">
              <div className="skills-outer-div">
                <h1 className="skills-header">Back-End Development:</h1>
                <div className="skills-div">
                  <Skill image={django} text="Django" />
                  <Skill image={firebase} text="Firebase" />
                  <Skill image={mysql} text="MySQL" />
                  <Skill image={ssms} text="SSMS" />
                </div>
              </div>
            </div>
            <div className="row-6">
              <div className="skills-outer-div">
                <h1 className="skills-header">Programming Languages:</h1>
                <div className="skills-div">
                  <Skill image={python} text="Python" />
                  <Skill image={C} text="C" />
                  <Skill image={cpp} text="C++" />
                </div>
              </div>
            </div>
            <div className="row-6">
              <div className="skills-outer-div">
                <h1 className="skills-header">Version Control:</h1>
                <div className="skills-div">
                  <Skill image={git} text="Git" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
