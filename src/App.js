import Education from "./components/containers/education/Education";
import Greeting from "./components/containers/greeting/Greeting";
import Projects from "./components/containers/projects/Projects";
import Skills from "./components/containers/skills/Skills";
import StartupProject from "./components/containers/StartupProjects/StartupProject";
import WorkExperience from "./components/containers/workExperience/WorkExperience";
import Header from "./components/header/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Greeting/>
      <Skills/>
      <Education/>
      <WorkExperience/>
      <Projects/>
      <StartupProject/>
    </div>
  );
}

export default App;
