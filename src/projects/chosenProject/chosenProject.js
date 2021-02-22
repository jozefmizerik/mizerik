import { useTranslation } from "react-i18next";
import classes from "./chosenProject.module.css";

const ChosenProject = ({ project }) => {
  const { t } = useTranslation();
  return (
    project !== null && (
      <section id="chosen-project" className={`${classes.chosenProject} p-5`}>
        <div className={classes.chosenProjectContainer}>
          <article className={classes.chosenProjectArticle}>
            <div className={classes.chosenProjectHeader}>
              <div className={classes.imageContainer}>
                <img
                  className={classes.chosenProjectImage}
                  src={project.img}
                  alt="Schedule"
                />
              </div>
            </div>
            <div className={classes.chosenProjectInfo}>
              <h3 className="text-center">{t(`project${project.id}Title`)}</h3>
              <p>{t(`project${project.id}Desc`)}</p>

              <div className={classes.projectLinksContainer}>
                <div className={classes.projectLink}>
                  {project.links.map((link, index) => (
                    <div key={index}>
                      <a href={link.href} target="_blank">
                        <i className="fas fa-angle-double-right"></i>{" "}
                        {t(link.desc)}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    )
  );
};
export default ChosenProject;
