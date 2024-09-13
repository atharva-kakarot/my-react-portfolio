import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";

interface Props {
  image: string;
  text: string;
}

const Skill: React.FC<Props> = ({ image, text }) => {
  return (
    <div className="card">
      <img
        src={`src/components/Skills/img/${image}.png`}
        className="card-img-top"
      />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

interface Props {}

const Skills: React.FC = () => {
  return (
    <div id="table-div">
      <h1 id="table-header">Skillset</h1>
      <table className="table">
        <tbody>
          <tr>
            <td>Front-End Development:</td>
            <td>
              <div className="skills-div">
                <Skill image="html5" text="HTML5" />
                <Skill image="css3" text="CSS3" />
                <Skill image="javascript" text="JavaScript" />
                <Skill image="react" text="React" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Back-End Development:</td>
            <td>
              <div className="skills-div">
                <Skill image="django" text="Django" />
                <Skill image="firebase" text="Firebase" />
                <Skill image="mysql" text="MySQL" />
                <Skill image="ssms" text="SSMS" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Programming Languages:</td>
            <td>
              <div className="skills-div">
                <Skill image="python" text="Python" />
                <Skill image="C" text="C" />
                <Skill image="cpp" text="C++" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Version Control:</td>
            <td>
              <div className="skills-div">
                <Skill image="git" text="Git" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
