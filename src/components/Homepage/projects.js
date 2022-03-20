import data from "../../data/data.json";
import Image from "next/image";
import Link from "next/link";

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
              <div className="my-4" key={link.name}>
                <div className="d-md-flex flex-row align-items-end">
                  <Link href={link.urls.web}>
                    <a className="flex-grow-1 text-decoration-none">
                      <h2>{link.name}</h2>
                    </a>
                  </Link>
                  <div className="text-muted mb-2">
                    (
                    <Link href={link.urls.source}>
                      <a className="text-decoration-none">
                        {descript.sourcecode}
                      </a>
                    </Link>
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
