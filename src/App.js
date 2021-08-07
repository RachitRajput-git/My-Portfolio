
import "./App.css";
import "../src/css/layout.css";
import Header from "./Components/Header";
import ProgressBar from "./Components/ProgressBar";
import WOW from "wow.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './config/Details.json'
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Service from "./pages/Service";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";




function App() {
  const wow = new WOW();
  wow.init();
  return (
    <>
      <Router>
        <ProgressBar />
        <Header header={Details.header} />

        <Switch>
          <Route exact path="/" >
            <Home Details={Details} />
          </Route>
          <Route exact path="/Home">
            <Home Details={Details} />
          </Route>
          <Route exact path="/Resume">
            <Resume Details={Details} />
          </Route>
          <Route exact path="/Services">
            <Service Details={Details} />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio Details={Details} />
          </Route>


        </Switch>

        <Footer footer={Details.Footer} />
      </Router>

    </>
  );
}

export default App;
