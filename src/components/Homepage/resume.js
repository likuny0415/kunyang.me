import data from "../../data/data.json";

export default function ResumeTemp(props) {
  const resumeData = data[props.version];
  const experiences = resumeData.workExperiences.experiences;
  const educationBG = resumeData.educationBackground;
  const educationEx = educationBG.education;

  return (
    <div className="container mt-3">
      <h3>{resumeData.workExperiences.title}</h3>
      {/* Working Experience */}
      <div className="row my-4">
        {experiences.map((ex) => {
          return (
            <>
              <div className="col-md-4">{ex.timePeriod}</div>
              <div className="col-md-8">
                <h5>{ex.company}</h5>
                <ul>
                  <li className="font-weight-bold">{ex.title}</li>
                  <ul className="mb-0">
                    {ex.projects.map((project) => {
                      return (
                        <>
                          <li>{project}</li>
                        </>
                      );
                    })}
                  </ul>
                </ul>
              </div>
            </>
          );
        })}
      </div>
      {/* Education Experience */}
      <h3>{educationBG.title}</h3>
      <div className="row my-4">
        {educationEx.map((ed) => {
          return (
            <>
              <div className="col-md-4">{ed.timePeriod}</div>
              <div className="col-md-8">
                <h5>{ed.school}</h5>

                {ed.texts.map((text) => {
                  return (
                    <>
                      <div className="mt-1">{text}</div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
