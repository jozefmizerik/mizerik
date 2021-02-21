import "./App.css";
import Header from "./header/header";
import Main from "./main/main";
import Resume from "./resume/resume";
import Projects from "./projects/projects";
import "./i18n";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
