import { useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./projects.module.css";
import ChosenProject from "./chosenProject/chosenProject";
import data from "../assets/data/projects";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const { t } = useTranslation();
  const clickHandler = (num) => {
    setCurrentProject(num);
    document.getElementById("chosen-project").scrollIntoView();
  };
  return (
    <section id="projects" className={`${classes.projects} text-center my-5`}>
      <h3 className="my-5">{t("myWorkingProjects")}</h3>
      <div className={classes.projectsContainer}>
        {data.map((project, index) => (
          <figure key={index} className={classes.project}>
            <div className={classes.projectImage}>
              <img src={project.img} alt={"Error"} />
              <span className={classes.tools}>
                <ul>
                  {project.technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
              </span>
              {project.isThesis && (
                <span className={`labelSpecial ${classes.labelBachelor}`}>
                  {t("thesis")}
                </span>
              )}
            </div>
            <div className={classes.projectInfo}>
              <h5>{t(project.name)}</h5>
              <button
                className={"buttonMore"}
                onClick={() => {
                  clickHandler(index);
                }}
              >
                {t("getMore")}
              </button>
            </div>
          </figure>
        ))}
      </div>
      <ChosenProject
        project={currentProject === null ? null : data[currentProject]}
      />
    </section>
  );
};

export default Projects;
