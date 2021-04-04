import logo from "./logo.svg";
import "./App.css";
import "../src/css/layout.css";
import Header from "./Components/Header";
import ProgressBar from "./Components/ProgressBar";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Details from './config/Details.json'
function App() {
  return (
    <>
      <Router>
        <ProgressBar />
        <Header header={Details.header} />
      </Router>
    </>
  );
}

export default App;
