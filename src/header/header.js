import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import classes from "./header.module.css";
import skFlag from "../assets/img/flagSK.jpg";
import enFlag from "../assets/img/flagGB.jpg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  const { t, i18n } = useTranslation();
  return (
    <header>
      <div className={classes.headerContainer}>
        <div className={classes.language}>
          <button onClick={() => i18n.changeLanguage("sk")}>
            <img src={skFlag} alt="Slovak" title="Slovenský jazyk" />
          </button>
          <button onClick={() => i18n.changeLanguage("en")}>
            <img src={enFlag} alt="English" title="English language" />
          </button>
        </div>
        <div className={classes.media}>
          <a href="https://sk-sk.facebook.com/jozef.mizerik" target="_blank">
            <i className="fab fa-facebook fa-lg" title="Facebook"></i>
          </a>
          <a href="https://www.instagram.com/jozkomizerik" target="_blank">
            <i className="fab fa-instagram fa-lg" title="Instagram"></i>
          </a>
        </div>
        <div className={classes.navBtn}>
          <button
            className={classes.navBtnIcon}
            onClick={() => setNavOpen(!navOpen)}
          >
            <i className="fas fa-bars fa-3x"></i>
          </button>
        </div>
        {(navOpen || windowWidth >= 695) && (
          <nav className={classes.navigation}>
            <a href="#cv">{t("cv")}</a>
            <a href="#projects">{t("projects")}</a>
            <a href="#about">{t("about")}</a>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;
