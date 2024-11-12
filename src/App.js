import Education from "./components/containers/education/Education";
import Greeting from "./components/containers/greeting/Greeting";
import Skills from "./components/containers/skills/Skills";
import Header from "./components/header/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Greeting/>
      <Skills/>
      <Education/>
    </div>
  );
}

export default App;
