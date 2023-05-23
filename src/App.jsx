/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import * as React from "react";
import Experience from "./Experience.json";
import "./App.scss";
import headshot from "./headshot.png";
import educationAnimation from "./guyz/eduGif.gif";
import projectsAnimation from "./guyz/projectsGif.gif";
import myInfoAnimation from "./guyz/me.gif";
import experienceAnimation from "./guyz/expGif.gif";
import eduStill from "./guyz/eduStill.png";
import expStill from "./guyz/experienceStill.png";
import meStill from "./guyz/meStill.png";
import projectsStill from "./guyz/projectsStill.png";
import backgroundGrid from "./cardBg.png";
import expBg from "./guyz/expCard.png";
import eduBg from "./guyz/eduCard.png";
import meBg from "./guyz/aboutCard.png";
import projectsBg from "./guyz/projectsCard.png";
import clickbaitLogo from "./clickbaitLogo.png";
import joshLogo from "./joshLogo.png";
import oldSiteLogo from "./oldSiteLogo.png";
import orfu from "./orfu.png";
import myLogo from "./myLogo.png";
import sigLogo from "./sigLogo.png";
import riteLogo from "./riteLogo.png";
import chatBox from "./siteImages/chatBox.png";
import grippy from "./siteImages/grippy.png";
import liza from "./siteImages/liza.png";
import login from "./siteImages/login.png";
import vader from "./siteImages/vader.png";
import rabbit from "./siteImages/rabbit.jpg";
import ccc from "./siteImages/ccc.jpg";
import JoshCard from "./siteImages/JoshCard.png";
import Dino from "./siteImages/dino.jpg";
import flowchart from "./siteImages/flowchart.png";
import mySiteScreenshot from "./mySiteScreenshot.png";
import site1 from "./siteImages/site1.png";
import site2 from "./siteImages/site2.png";
import site3 from "./siteImages/site3.png";
import site4 from "./siteImages/site4.png";
import ad1 from "./schoolWork/ad1.jpg";
import daAbstract from "./schoolWork/daAbstract.jpg";
import daLogo from "./schoolWork/daLogo.png";
import daPlan from "./schoolWork/daPlan.png";
import leelah from "./schoolWork/leelah.jpg";
import man from "./schoolWork/man.jpg";
import woman from "./schoolWork/woman.jpg";
import middle from "./schoolWork/middle.jpg";
import mockup from "./schoolWork/mockup.png";
import plan from "./schoolWork/plan.png";
import ad2 from "./schoolWork/adNo2.png";
import fullHeadshot from "./fullHeadshot.jpeg";

function App() {
  const experience = Experience.experience;
  const education = Experience.education;
  const projects = Experience.projects;
  const [currentComp, setCurrentComp] = useState(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const myInfoRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(null);
  const summonAreaRef = useRef(null);
  const sectionGifRef = useRef(null);
  const selectorButtonsRef = useRef(null);
  const resumeSectionRef = useRef(null);
  const sectionPicRef = useRef(null);
  const cardMatRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMobileSize, setIsMobileSize] = useState(null);
  const [, setPrevSection] = useState(null);
  const projectImages = {
    chatBox: chatBox,
    grippy: grippy,
    liza: liza,
    login: login,
    vader: vader,
    rabbit: rabbit,
    ccc: ccc,
    JoshCard: JoshCard,
    Dino: Dino,
    flowchart: flowchart,
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
  const eduImages = {
    daAbstract: daAbstract,
    daPlan: daPlan,
    mockup: mockup,
    plan: plan,
    ad1: ad1,
    ad2: ad2,
    man: man,
    middle: middle,
    woman: woman,
  };

  const Welcome = () => {
    return (
      <div id="welcome">
        <div>
          <h1 id="welcomeText">Matt Alexander</h1>
          <h2 id="welcomeText1">
            Web Developer, Product Designer, and Digital Media Specialist
          </h2>
          <div id="welcomeText2">
            Select a card to learn more about me and my work.
          </div>
        </div>
        <div id="arrowParent">
          <div id="arrow1" className="arrow">
            &#x25BC;
          </div>
          <div id="arrow2" className="arrow">
            &#x25BC;
          </div>
          <div id="arrow3" className="arrow">
            &#x25BC;
          </div>
          <div id="arrow4" className="arrow">
            &#x25BC;
          </div>
        </div>
      </div>
    );
  };

  const JoshSiteIFrame = () => {
    return (
      <div id="iFrameParent">
        <iframe
          id="joshSiteIFrame"
          src="https://www.youtube-nocookie.com/embed/B11erRVrfqE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  };
  const MySiteLink = () => {
    return (
      <a
        href="https://mattalexander.gallery/alt"
        target="_blank"
        rel="noreferrer"
        id="mySiteLink"
      >
        <div id="visitText">visit my gallery</div>
      </a>
    );
  };
  const RiteIFrame = () => {
    return (
      <div id="iFrameParent">
        <iframe
          id="riteIFrame"
          src="https://www.youtube.com/embed/mpu4ooALI_8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  };
  const MyInfo = () => {
    return (
      <div className="section myInfo">
        {!isMobileSize && (
          <div id="myPic">
            <img src={fullHeadshot} id="myPic" alt="Matt Alexander" />
          </div>
        )}
        <div id="myInfoBlock">
          <div id="myName">Matt Alexander</div>
          <div id="shortBio">{Experience.shortSummary}</div>
          <div id="bio">
            {Experience.summary.split("/").map((item, index) => (
              <React.Fragment key={index}>
                <div className="aboutMeParagraph">{item}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const ExperienceComp = ({ experience }) => {
    return (
      <div className="section expSection">
        {experience.map((exp) => (
          <div className={`${exp.className}`} id="experience" key={exp.title}>
            <div id="expContent">
              <div className="title">{exp.title}</div>
              <div className="company">{exp.company}</div>
              <div className="location">{exp.location}</div>
              <div className="dates">{exp.dates}</div>
              <div className="description">
                {exp.description.map((desc) => (
                  <div className="descriptionItem" key={desc}>
                    {desc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  const EducationComp = ({ education }) => {
    const [currentImg, setCurrentImg] = useState(null);
    const [currentImgName, setCurrentImgName] = useState(null);
    const imgNames = Object.keys(eduImages);

    const focusCurrentImage = (image, index) => {
      setCurrentImg(image);
      setCurrentImgName(imgNames[index]);
    };

    return (
      <div className="section" id="education">
        {education.map((edu) => (
          <div id="innerSection" key={edu.school}>
            <h3>Education</h3>
            <div>
              {edu.school}, {edu.dates}
            </div>
            <div>
              {edu.degree} | {edu.minor} Minor
            </div>
            <div>Summa Cum Laude</div>
            <div>{edu.location}</div>
          </div>
        ))}
        <div>
          {currentImg ? (
            <div id="currentEduImage">
              <div id="selectedEduImage">
                <div
                  id="imgClose"
                  onClick={() => focusCurrentImage(null)}
                  style={{ backgroundColor: "red" }}
                >
                  X
                </div>
                <img src={eduImages[currentImg]} className={currentImgName} />
                <div id="selectedImageCaption">
                  {education[0]["images"][currentImg].caption}
                </div>
              </div>
            </div>
          ) : (
            <div id="selectedEduAnimationParent">
              <h2>Relevant schoolwork</h2>
              <div id="eduImagesParent">
                {Object.values(eduImages).map((img, index) => (
                  <img
                    key={img}
                    src={img}
                    className={imgNames[index]}
                    id="eduImage"
                    onClick={() => {
                      focusCurrentImage(imgNames[index]);
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  const ProjImages = ({
    images,
    projectIndex,
    projectName,
    activateSelectedImage,
    imgSrc,
  }) => {
    const projImagesRef = useRef(null);
    const projImagesId = `projImages${projectIndex}`;

    return (
      <div id={projImagesId} className="projImages" ref={projImagesRef}>
        {images &&
          Object.keys(images).map((image) => (
            <div id="imageParent" key={image}>
              <img
                className={`${projectName}Image projectImage`}
                id={image}
                key={image}
                src={imgSrc[image]}
                onClick={() => {
                  activateSelectedImage(image, projectName);
                }}
              />
            </div>
          ))}
      </div>
    );
  };
  const Lightbox = ({ selectedImage, projectName, closeAction, imgObject }) => {
    const lightboxRef = useRef(null);

    useEffect(() => {
      lightboxRef.current.classList.add("lightBoxFadeIn");
      setTimeout(() => {
        lightboxRef.current.classList.remove("lightBoxFadeIn");
      }, 500);
    }, [selectedImage]);

    const handleClose = (projectName) => {
      lightboxRef.current.classList.add("lightBoxGoAway");
      setTimeout(() => {
        closeAction(projectName);
      }, 500);
    };

    return (
      <>
        <div
          id="lightbox"
          ref={lightboxRef}
          style={{
            display: selectedImage === null ? "none" : "flex",
          }}
          className={`${projectName}Lightbox`}
        >
          <div
            className={`${projectName}Close`}
            id="imgClose"
            onClick={() => {
              handleClose(projectName);
            }}
          >
            X
          </div>
          <>
            <img
              className={`${projectName}Image projectImage`}
              id={selectedImage.image}
              src={imgObject[selectedImage.image]}
            />
            <div id="imgCaption">{selectedImage.caption}</div>
          </>
        </div>
      </>
    );
  };
  const ProjectsComp = ({ projects }) => {
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

    return (
      <div id="projects" className="section">
        <div id="projectsTitle">product design projects</div>
        <div id="projectsParent">
          {Object.values(projects)
            .sort((a, b) => a.order - b.order)
            .map((project, index) => (
              <div className={project.className} id="project" key={index}>
                {project.images && selectedImages[project.className].image && (
                  <Lightbox
                    selectedImages={selectedImages}
                    selectedImage={selectedImages[project.className]}
                    setSelectedImages={setSelectedImages}
                    projectName={project.className}
                    imgObject={projectImages}
                    closeAction={() => {
                      setSelectedImages({
                        ...selectedImages,
                        [project.className]: { image: null, caption: null },
                      });
                    }}
                  />
                )}
                {project.className === "cardGame" && <h2>{project.title}</h2>}
                {project.logo && (
                  <img className="projectLogo" src={logos[project.logo]} />
                )}
                <div id="projectSubtitle">{project.subtitle}</div>
                {project.images && (
                  <ProjImages
                    images={project.images}
                    projectIndex={index}
                    projectName={project.className}
                    imgSrc={projectImages}
                    activateSelectedImage={activateSelectedImage}
                  />
                )}
                {project.className === "joshSite" && <JoshSiteIFrame />}
                {project.className === "magSite" && <MySiteLink />}
                {project.className === "rite" && <RiteIFrame />}
                <div id="projectDescription">{project.description}</div>
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
      </div>
    );
  };
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  function activateSection(section, sectionRef) {
    if (showWelcome) {
      setShowWelcome(false);
    }
    setCurrentComp(section);
    setCurrentSection(sectionRef);
  }
  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
    console.log("mobile is", isMobileSize);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);
  console.log("currentComp is", currentComp);
  const SelectorButton = ({
    sectionName,
    sectionPicture,
    sectionRef,
    selectorClass,
    sectionCardBG,
  }) => {
    const finalSectionName = (sectionName) => {
      if (sectionName === "myInfo") {
        return "About Me";
      } else {
        return sectionName;
      }
    };

    const updatePositions = (currentSection) => {
      const cardRect = currentSection.current.getBoundingClientRect();
      const cardMatRect = cardMatRef.current.getBoundingClientRect();
      const dx =
        cardMatRect.x - cardRect.x + (cardMatRect.width - cardRect.width) / 2;
      const dy =
        cardMatRect.y - cardRect.y + (cardMatRect.height - cardRect.height) / 2;

      // Animate the new active card
      currentSection.current.style.transform = `translate(${dx}px,${dy}px) rotateY(0deg) scale(.5) perspective(80px) rotateX(10deg) rotateZ(90deg)`;
    };

    useEffect(() => {
      if (currentSection === null) return;
      // Update position on mount and whenever currentSection or window size changes
      if (!isMobileSize) {
        updatePositions(currentSection);
      }
      setTimeout(() => {
        currentSection.current.classList.add("cardActive");
      }, 500);
      setTimeout(() => {
        sectionGifRef.current.classList.add("sectionGifActive");
      }, 600);
    }, [currentSection, windowSize]);
    return (
      <div
        id="selectorButton"
        style={{
          backgroundImage: `url(${sectionCardBG})`,
        }}
        className={
          currentSection === sectionRef
            ? selectorClass
            : `${selectorClass} cardNoHover`
        }
        onClick={() => {
          activateSection(sectionName, sectionRef);
        }}
        ref={sectionRef}
        onMouseEnter={() => {
          sectionRef.current.classList.add("glow");
        }}
        onMouseLeave={() => {
          sectionRef.current.classList.remove("glow");
        }}
      >
        <div className="card" id="cardParent">
          <div id="sectionName">{finalSectionName(sectionName)}</div>
          <img
            id="sectionPic"
            ref={sectionPicRef}
            src={sectionRef === currentSection ? myLogo : sectionPicture}
            alt="Section"
          />
        </div>
      </div>
    );
  };
  const SectionGif = ({ gif, id }) => {
    return (
      <>
        <img
          ref={sectionGifRef}
          id={id}
          className="sectionGif"
          src={gif}
          alt="Section Animation"
        />
      </>
    );
  };

  const SectionTitle = () => {
    function decideTitle() {
      switch (currentComp) {
        case "projects":
          return "Product Design Projects";
        case "experience":
          return "Professional Experience";
        case "myInfo":
          return "Personal Information";
        case "education":
          return "Education";
        default:
          return "";
      }
    }

    return <div id="compTitle">{decideTitle()}</div>;
  };

  return (
    <div id="App">
      {showWelcome && <Welcome />}
      <div className="colorBox color1"></div>
      <div className="colorBox color2"></div>
      <div className="colorBox color3"></div>
      <div id="selectorButtons" ref={selectorButtonsRef}>
        <SelectorButton
          sectionName="projects"
          sectionPicture={projectsStill}
          sectionDescription="my projects"
          sectionRef={projectsRef}
          selectorClass="projects"
          sectionCardBG={projectsBg}
        />
        <SelectorButton
          sectionName="experience"
          sectionPicture={expStill}
          sectionDescription="my professional experience"
          sectionRef={experienceRef}
          selectorClass="experience"
          sectionCardBG={expBg}
        />
        <SelectorButton
          sectionName="myInfo"
          sectionPicture={meStill}
          sectionDescription="my personal information"
          sectionRef={myInfoRef}
          selectorClass="myInfo"
          sectionCardBG={meBg}
        />
        <SelectorButton
          sectionName="education"
          sectionPicture={eduStill}
          sectionDescription="my academic experience"
          sectionRef={educationRef}
          selectorClass="education"
          sectionAnimation={educationAnimation}
          sectionCardBG={eduBg}
        />
      </div>

      <div id="playingField">
        <div
          id="resumeSection"
          className="pulsingShadow"
          ref={resumeSectionRef}
        >
          {currentComp === "experience" ? (
            <ExperienceComp experience={experience} />
          ) : currentComp === "education" ? (
            <EducationComp education={education} />
          ) : currentComp === "projects" ? (
            <ProjectsComp projects={projects} />
          ) : currentComp === "myInfo" ? (
            <MyInfo />
          ) : null}
        </div>
        <div id="summonArea" ref={summonAreaRef}>
          {currentComp === "experience" ? (
            <>
              <SectionGif gif={experienceAnimation} id="expAnimation" />
              {isMobileSize && <SectionTitle />}
            </>
          ) : currentComp === "education" ? (
            <>
              <SectionGif gif={educationAnimation} id="eduAnimation" />
              {isMobileSize && <SectionTitle />}
            </>
          ) : currentComp === "projects" ? (
            <>
              <SectionGif gif={projectsAnimation} id="projAnimation" />
              {isMobileSize && <SectionTitle />}
            </>
          ) : currentComp === "myInfo" ? (
            <>
              <SectionGif gif={myInfoAnimation} id="myInfoAnimation" />
              {isMobileSize && <SectionTitle />}
            </>
          ) : null}
        </div>
      </div>
      <div id="cardMat" ref={cardMatRef} />
    </div>
  );
}

export default App;