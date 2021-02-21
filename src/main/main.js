import classes from "./main.module.css";

const Main = () => {
  return (
    <section id="index">
      <div className={classes.indexContainer}>
        <div className={classes.indexContainerInfo}>
          <h1 className={classes.indexTitle}>Bc. Jozef Mizerík</h1>
          <h4 className={classes.indexSubtitle}>React vývojár</h4>
          <a href="#projects" className={classes.indexButton}>
            <h2>MOJE PROJEKTY</h2>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Main;
