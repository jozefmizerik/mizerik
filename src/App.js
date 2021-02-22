import { Suspense } from "react";
import "./App.css";
import Header from "./header/header";
import Main from "./main/main";
import Resume from "./resume/resume";
import Projects from "./projects/projects";
import About from "./about/about";
import Footer from "./footer/footer";
import "./i18n";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>} maxDuration={5000}>
        <Header />
        <Main />
        <Resume />
        <Projects />
        <About />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
