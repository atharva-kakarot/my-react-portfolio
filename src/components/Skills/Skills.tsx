import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";

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
                <div className="card">
                  <img
                    src="src\components\Skills\img\html5.png"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">HTML5</p>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="src\components\Skills\img\css3.png"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">CSS3</p>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="src\components\Skills\img\javascript.png"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">JavaScript</p>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="src\components\Skills\img\react.png"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">React</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Back-End Development:</td>
            <td>
              <div className="skills-div">
                <div className="card">
                  <img
                    src="src\components\Skills\img\django.png"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Django</p>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="src\components\Skills\img\firebase.png"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">Firebase</p>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="src\components\Skills\img\mysql.png"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">MySQL</p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Programming Languages:</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>Version Control:</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
