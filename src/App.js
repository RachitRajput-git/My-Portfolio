
import "./App.css";
import "../src/css/layout.css";
import Header from "./Components/Header";
import ProgressBar from "./Components/ProgressBar;
import XML from './sitemap.xml';
import WOW from "wow.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from './config/Details.json'
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Service from "./pages/Service";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Error404 from "./pages/Error404";




function App() {
  const wow = new WOW();
  wow.init();
  return (
    <>
      <Router>
        <ProgressBar />
        <Header header={Details.header} />

        <Switch>
<Route component={XML} path={'/sitemap.xml'} />
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
          <Route  path="*">
            <Error404 Details={Details} />
          </Route>


        </Switch>

        <Footer footer={Details.Footer} />
      </Router>

    </>
  );
}

export default App;
