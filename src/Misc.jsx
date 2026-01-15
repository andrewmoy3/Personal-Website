import "./Misc.css";

const Misc = () => {
  const georgetownSite = (
    <>
      I also created a website dedicated specifically to my graduate school
      coursework at Georgetown University, which can be found at{" "}
      <a
        href="https://andrewmoy.georgetown.domains/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://andrewmoy.georgetown.domains/
      </a>
      . This site contains final project reports, course descriptions, and
      course syllabi.
    </>
  );

  const dsanCourses = [
    "Introduction to Data Analytics",
    "Probabilistic Modeling and Statistical Computing",
    "Neural Networks and Deep Learning",
    "Advanced Data Visualization",
    "Statistical Learning",
    "Applied Generative AI for AI Developers",
  ];
  const csCourses = [
    "Data Structures and Algorithms",
    "Computer Systems",
    "Embedded Systems",
    "Software Engineering",
    "Operating Systems",
    "Computing with Text",
  ];
  const engineCourses = [
    "Linear Algebra",
    "Multivariable Calculus",
    "Differential Equations",
    "Numerical Methods for Engineering",
    "Statistics for Engineering Design",
    "Computer Vision",
    "Mobile Robotics",
  ];

  const organizations = [
    "Georgetown University Varsity Baseball Team",
    "Tau Beta Pi Engineering Honor Society (Vice-President)",
    "Phi Beta Kappa Honor Society",
    "Swarthmore College Varsity Baseball Team (Co-Captain)",
    "Swarthmore College Computer Society",
  ];
  const technologies = [
    "Python",
    "pandas",
    "NumPy",
    "SciPy",
    "MATLAB",
    "Git",
    "SQL",
    "NodeJS",
    "React.js",
    "MongoDB",
  ];
  return (
    <div id="misc">
      <h1 id="miscHeader">Miscellaneous</h1>
      <hr className="line"></hr>
      <div id="miscContent">
        <div id="GUsite" className="miscSection">
          <h2>Georgetown University Website</h2>
          <hr className="line"></hr>
          <p>{georgetownSite}</p>
        </div>
        <div id="courses" className="miscSection">
          <h2>Courses Taken</h2>
          <hr className="line"></hr>

          <div id="courseLists">
            <div className="course">
              <h3>Data Science and Analytics (Georgetown)</h3>
              <ul>
                {dsanCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
            <div className="course">
              <h3>Computer Science (Swarthmore) </h3>
              <ul>
                {csCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
            <div className="course">
              <h3>Engineering (Swarthmore)</h3>
              <ul>
                {engineCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div id="courses" className="miscSection">
          <h2>Extracurriculars</h2>
          <hr className="line"></hr>
          <ul>
            {organizations.map((org, index) => (
              <li key={index}>{org}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="miscGrid">
        <div className="vertical-bar"></div>

        <div className="miscGridItem" id="courses">
          <h2>Courses Taken</h2>
          <ul>
            {courses.map((course, index) => (
              <div key={index}>{course}</div>
            ))}
          </ul>
        </div>
        <div className="miscGridItem" id="orgs">
          <h2>Organizations</h2>
          <ul>
            {organizations.map((org, index) => (
              <div key={index}>{org}</div>
            ))}
          </ul>
        </div>
        <div className="miscGridItem" id="techs">
          <h2>Technologies Used</h2>
          <ul>
            {technologies.map((tech, index) => (
              <div key={index}>{tech}</div>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Misc;
