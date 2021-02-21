import React, { useState, useEffect } from "react";
import classes from "./header.module.css";

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
  // console.log(windowWidth);
  return (
    <header>
      <div className={classes.headerContainer}>
        <div className={classes.language}>
          <a href="./index.html">
            <img
              src="../assets/img/flagSK.jpg"
              alt="Slovak"
              title="Slovenský jazyk"
            />
          </a>
          <a href="./indexAj.html">
            <img
              src="../assets/img/flagGB.jpg"
              alt="English"
              title="English language"
            />
          </a>
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
            <a href="#cv">Životopis</a>
            <a href="#projects">Projekty</a>
            <a href="#about">O mne</a>
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;
