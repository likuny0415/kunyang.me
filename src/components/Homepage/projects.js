import data from "../../data/data.json";
import Image from "next/image";

export default function ProjectTemplate(props) {
  const projectsData = data.projects;
  const lang = props.lang;
  let descript;
  if (lang === "zh") {
    descript = {
      sourcecode: projectsData.zh_sourceCode,
      description: "description_zh",
    };
  } else {
    descript = {
      sourcecode: projectsData.en_sourceCode,
      description: "description_en",
    };
  }

  return (
    <>
      <div className="container mt-3">
        {projectsData.links.map((link) => {
          return (
            <>
              <div className="my-4">
                <div className="d-md-flex flex-row align-items-end">
                  <a
                    href={link.urls.web}
                    className="flex-grow-1 text-decoration-none"
                  >
                    <h2>{link.name}</h2>
                  </a>
                  <div className="text-muted mb-2">
                    (
                    <a href={link.urls.source} className="text-decoration-none">
                      {descript.sourcecode}
                    </a>
                    )
                  </div>
                </div>
                <Image
                  alt="project_image"
                  width={320}
                  height={180}
                  src={link.image}
                  href={link.image}
                />
                <p className="mt-1">{link[descript.description]}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
