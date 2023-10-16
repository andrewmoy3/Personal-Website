import "./Misc.css";

const Misc = () => {
  const courses = [
    "Data Structures and Algorithms",
    "Computer Systems",
    "Embedded Systems",
    "Software Engineering",
    "Numerical Methods for Engineering",
    "Linear Algebra",
    "Multivariable Calculus",
    "Computer Aided Manufacturing",
  ];
  const organizations = [
    "Varsity Baseball",
    "Swarthmore College Computer Society",
  ];
  const technologies = [
    "NodeJS",
    "React",
    "Express",
    "HTML",
    "CSS",
    "MongoDB",
    "Firebase",
  ];
  return (
    <div id="misc">
      <h1 id="miscHeader">Miscellaneous</h1>
      <hr className="line"></hr>

      <div className="miscGrid">
        {/* <div className="vertical-bar"></div> */}

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
      </div>
    </div>
  );
};

export default Misc;
