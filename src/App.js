import logo from "./Assest/PhotoGlogo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hey! this is a project, to deploy using the docker image.</h1>
        <a href="https://photogtech.in" target="_blank">
          Photo-G Technologies
        </a>
      </header>
    </div>
  );
}

export default App;
