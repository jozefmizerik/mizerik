import { useTranslation } from "react-i18next";
import classes from "./about.module.css";
import classesCv from "../resume/resume.module.css";
import signatureImg from "../assets/img/signature.png";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className={`${classes.about} p-4`}>
      <div className={classesCv.cvWrapper}>
        <div className={`${classesCv.cvHeader} text-center`}>
          <h2>{t("about")}</h2>
        </div>
        <div className="px-5 pt-5">
          <p>{t("about1")}</p>
          <p>{t("about2")}</p>
          <p>
            {t("about3a")}
            <a href="#projects"> {t("about3b")}</a>. {t("about3c")}
          </p>
          <p>{t("about4")}</p>
          <p>{t("about5")}</p>
          <p>{t("about6")}</p>
        </div>
        <div className={classes.imgSignature}>
          <img
            src={signatureImg}
            alt="Jozef Mizerik"
            className={classes.imgSignature}
          />
        </div>
      </div>
    </section>
  );
};
export default About;
