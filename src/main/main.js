import { useTranslation } from "react-i18next";
import classes from "./main.module.css";

const Main = () => {
  const { t } = useTranslation();
  return (
    <section id="index">
      <div className={classes.indexContainer}>
        <div className={classes.indexContainerInfo}>
          <h1 className={classes.indexTitle}>Bc. et Bc. Jozef Mizerík</h1>
          <h4 className={classes.indexSubtitle}>{t("reactDeveloper")}</h4>
          <a href="#projects" className={classes.indexButton}>
            <h2>{t("myProjects")}</h2>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Main;
