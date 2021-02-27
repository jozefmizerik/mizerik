import { useTranslation } from "react-i18next";
import classes from "./resume.module.css";
import skFlag from "../assets/img/flagSK.jpg";
import enFlag from "../assets/img/flagGB.jpg";

const Resume = () => {
  const { t } = useTranslation();
  return (
    <section id="cv" className="m-2">
      <div className={`${classes.cvWrapper} text-center`}>
        <div className={`${classes.cvHeader} text-center`}>
          <h2>{t("cv")}</h2>
        </div>
        <div className={`${classes.cvTitle} p-3`}>
          <h4>{t("experience")}</h4>
        </div>
        <figure className={classes.cvData}>
          <div className={classes.square}></div>
          <div className={classes.cvDataBasic}>
            <h6 className="font-weight-bold">
              {t("reactDeveloper")} - GQSystems s.r.o
            </h6>
            <h6>2020/03-2021/02</h6>
          </div>
          <div className={classes.cvDataInfo}>
            <p>{t("experience1")}</p>
          </div>
        </figure>
        <figure className={classes.cvData}>
          <div className={classes.square}></div>
          <div className={classes.cvDataBasic}>
            <h6 className="font-weight-bold">{t("experience2Name")}</h6>
            <h6>2019/06-2019/09</h6>
          </div>
          <div className={classes.cvDataInfo}>
            <p>{t("experience2")}</p>
          </div>
        </figure>
        <div className={`${classes.cvTitle} p-3`}>
          <h4>{t("education")}</h4>
        </div>
        <figure className={classes.cvData}>
          <div className={classes.square}></div>
          <div className={classes.cvDataBasic}>
            <h6 className="font-weight-bold">{t("education1University")}</h6>
            <h6>2017-2020</h6>
          </div>
          <div className={classes.cvDataInfo}>
            <p>
              {t("education1Faculty")}
              <br />
              {t("education1Specialisation")}
            </p>
          </div>
        </figure>
        <figure className={classes.cvData}>
          <div className={classes.square}></div>
          <div className={classes.cvDataBasic}>
            <h6 className="font-weight-bold">{t("education2University")}</h6>
            <h6>2014-2017</h6>
          </div>
          <div className={classes.cvDataInfo}>
            <p>
              {t("education2Faculty")}
              <br />
              {t("education2Specialisation")}
            </p>
          </div>
        </figure>
        <div className={`${classes.cvTitle} p-3`}>
          <h4>{t("languageSkills")}</h4>
        </div>
        <figure className={classes.cvData}>
          <div className={`${classes.square} invisible`}></div>
          <div className={classes.cvDataBasic}>
            <img src={skFlag} alt="Slovak" />
          </div>
          <div className={classes.cvDataInfo}>
            <p>{t("nativeLanguage")}</p>
          </div>
        </figure>
        <figure className={classes.cvData}>
          <div className={`${classes.square} invisible`}></div>
          <div className={classes.cvDataBasic}>
            <img src={enFlag} alt="English" />
          </div>
          <div className={classes.cvDataInfo}>
            <p>B2</p>
          </div>
        </figure>
        <div className={`${classes.cvTitle} p-3`}>
          <h4>{t("programmingSkills")}</h4>
        </div>
        <figure className={`${classes.cvData} ${classes.skillsInfo} p-3`}>
          <div className={classes.cvDataInfo}>
            <h6>HTML5, CSS3, Bootstrap</h6>
            <div className={classes.skillBar}></div>
          </div>
          <div className={classes.cvDataInfo}>
            <h6>Node.js</h6>
            <div className={classes.skillBar}></div>
          </div>
          <div className={classes.cvDataInfo}>
            <h6>React</h6>
            <div className={classes.skillBar}></div>
          </div>
          <div className={classes.cvDataInfo}>
            <h6>SQL</h6>
            <div className={classes.skillBar}></div>
          </div>
          <div className={classes.cvDataInfo}>
            <h6>JavaScript</h6>
            <div className={classes.skillBar}></div>
          </div>
          <div className={classes.cvDataInfo}>
            <h6>Photoshop</h6>
            <div className={classes.skillBar}></div>
          </div>
          <div className={classes.cvDataInfo}>
            <h6>Git</h6>
            <div className={classes.skillBar}></div>
          </div>
          <div className={classes.cvDataInfo}>
            <h6>MongoDb</h6>
            <div className={classes.skillBar}></div>
          </div>
        </figure>
        <div className={`${classes.cvTitle} p-3`}>
          <h4>{t("drivingLicence")}</h4>
        </div>
        <figure>
          <div className={`${classes.cvDataInfo} text-left pl-3`}>
            <p>{t("type")} B</p>
          </div>
        </figure>
        <div className={`${classes.cvTitle} pl-3`}>
          <h4>{t("interests")}</h4>
        </div>
        <figure className={`${classes.cvData} p-3`}>
          <div className={`${classes.cvDataInfo} ${classes.iconsInterest}`}>
            <span className="p-4">
              <i
                className="fas fa-laptop-code fa-3x"
                title={t("interest1")}
              ></i>
            </span>
            <span className="p-4">
              <i className="fas fa-swimmer fa-3x" title={t("interest2")}></i>
            </span>
            <span className="p-4">
              <i
                className="fas fa-luggage-cart fa-3x"
                title={t("interest3")}
              ></i>
            </span>
            <span className="p-4">
              <i className="fas fa-users fa-3x" title={t("interest4")}></i>
            </span>
          </div>
        </figure>
      </div>
    </section>
  );
};
export default Resume;
