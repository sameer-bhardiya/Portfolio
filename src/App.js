import Greeting from "./components/containers/greeting/Greeting";
import Header from "./components/header/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Greeting/>
    </div>
  );
}

export default App;
