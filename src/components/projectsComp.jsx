import { useRef, useEffect, useState } from "react";
import Experience from "/src/Experience.json";
import ProjImages from "./ProjImages";
import MySiteLink from "./MySiteLink";
import Lightbox from "./Lightbox";
import clickbaitLogo from "/src/assets/logos/clickbaitLogo.png";
import joshLogo from "/src/assets/logos/joshLogo.png";
import oldSiteLogo from "/src/assets/logos/oldSiteLogo.png";
import orfu from "/src/assets/logos/orfu.png";
import sigLogo from "/src/assets/logos/sigLogo.png";
import riteLogo from "/src/assets/logos/riteLogo.png";
import site1 from "/src/assets/siteImages/site1.jpg";
import site2 from "/src/assets/siteImages/site2.jpg";
import site3 from "/src/assets/siteImages/site3.jpg";
import site4 from "/src/assets/siteImages/site4.jpg";
import Project from "./Project"

const ProjectsComp = (props) => {
  const projectImages = {
    site1: site1,
    site2: site2,
    site3: site3,
    site4: site4,
  };
  const logos = {
    clickbaitLogo: clickbaitLogo,
    joshLogo: joshLogo,
    oldSiteLogo: oldSiteLogo,
    orfu: orfu,
    sigLogo: sigLogo,
    riteLogo: riteLogo,
  };

  const projects  = Experience.projects;
  const scrollRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState(() => {
    const initialState = {};
    Object.values(projects).forEach((project) => {
      initialState[project.className] = { image: null, caption: null };
    });
    return initialState;
  });

  const activateSelectedImage = (image, projectName) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [projectName]: {
        image: image,
        caption: projects[projectName].images[image].caption,
      },
    }));
  };

  const SecondSideBar = () => {
    return (
      <div id="secondSideBar">
        {Object.values(projects)
          .sort((a, b) => a.order - b.order)
          .map((project, index) => (
            <div className={project.className} id="project" key={index}>
              <h2>{project.title}</h2>
              {project.logo && (
                <img className="projectLogo" src={logos[project.logo]} />
              )}
              <div id="projectSubtitle">{project.subtitle}</div>
              <div id="skillsBox">
                {project.skills &&
                  project.skills.map((skill) => (
                    <div id="skill" key={skill}>
                      {skill}
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div id="projects" className="section" ref={scrollRef}>
      <SecondSideBar />
      <Project />
    </div>
  );
};

export default ProjectsComp;