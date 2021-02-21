import { useTranslation } from "react-i18next";
import classes from "./projects.module.css";
import skreenbeImg from "../assets/img/skreenbe.svg";
import conferenceImg from "../assets/img/conference.jpg";
import runnersImg from "../assets/img/runners.jpeg";
import bankImg from "../assets/img/bank.jpg";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className={`${classes.projects} text-center my-5`}>
      <h3 className="my-5">{t("myWorkingProjects")}</h3>
      <div className={classes.projectsContainer}>
        <figure className={classes.project}>
          <div className={classes.projectImage}>
            <img src={skreenbeImg} alt="skreenbe" />
            <span className={classes.tools}>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDb</li>
              </ul>
            </span>
          </div>
          <div className={classes.projectInfo}>
            <h5>{t("project1")}</h5>
            <button className={"buttonMore"} project_num="3">
              {t("getMore")}
            </button>
          </div>
        </figure>

        <figure className={classes.project}>
          <div className={classes.projectImage}>
            <img src={conferenceImg} alt="conference" />
            <span className={classes.tools}>
              <ul>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>MongoDb</li>
              </ul>
            </span>
            <span className={`labelSpecial ${classes.labelBachelor}`}>
              {t("thesis")}
            </span>
          </div>
          <div className={classes.projectInfo}>
            <h5>{t("project2")}</h5>
            <button className="buttonMore" project_num="0">
              {t("getMore")}
            </button>
          </div>
        </figure>

        <figure className={classes.project}>
          <div className={classes.projectImage}>
            <img src={runnersImg} alt="runners" />
            <span className={classes.tools}>
              Java
              <br />
              XML
              <br />
              Git
              <br />
            </span>
          </div>
          <div className={classes.projectInfo}>
            <h5>{t("project3")}</h5>
            <button className={"buttonMore"} project_num="1">
              {t("getMore")}
            </button>
          </div>
        </figure>

        <figure className={classes.project}>
          <div className={classes.projectImage}>
            <img src={bankImg} alt="bank" />
            <span className={classes.tools}>
              Java
              <br />
              PostgreSQL
              <br />
            </span>
          </div>
          <div className={classes.projectInfo}>
            <h5>{t("project4")}</h5>
            <button className={"buttonMore"} project_num="2">
              {t("getMore")}
            </button>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Projects;
