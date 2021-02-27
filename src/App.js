import './main.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./componnets/Home.jsx";
import AboutMe from "./componnets/AboutMe.jsx";
import FindMe from "./componnets/FindMe.jsx";
import Work from "./componnets/Work.jsx";
import Education from "./componnets/Education.jsx";
import Contact from "./componnets/Contact.jsx";


function App() {
  return (
    <Router>{/** Tiene que haber una etiqueta que lo envuelva todo , uso <Route> aprobechando el sentido de la práctica*/}
    <header className="header-principal">
      <h1>INFOLOJO</h1>
      <span className="subtitle-principal">Technician in Microcomputer Systems and Networks
        Web apps Developer
      </span>
    </header>
   
    <main>
      <nav>
      <h2>Curriculum Vitae</h2>
        {/** Links establecen las rutas de react, estos links se rescantan en un Switch y mediante Route se le indica que componente cargar*/}
        <ul>
          <li><p>
            <Link to="/">Home</Link>
          </p></li>
          <li><p>
            <Link to="/aboutme.html">About me</Link>
          </p></li>
          <li><p>
            <Link to="/findme.html">Find me</Link>
          </p></li>
          <li><p>
            <Link to="/work.html">Working</Link>
          </p></li>
          <li><p>
            <Link to="/education.html">Education</Link>
          </p></li>
          <li><p>
            <Link to="/contact.html">Contact</Link>  
          </p></li>
        </ul>
      </nav>
      <section id="contenido">
      <Switch>{/*Contenido dinámico a partir de los Links se llama a un componente*/}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/aboutme.html" exact>
          <AboutMe/>
        </Route>  
        <Route path="/findme.html" exact>
          <FindMe/>
        </Route>
        <Route path="/work.html" exact>
          <Work />
        </Route>
        <Route path="/education.html" exact>
          <Education />
        </Route>
        <Route path="/contact.html" exact>
          <Contact/>
        </Route>
      </Switch>
      </section>
    
    </main>
    </Router>
  );
}

export default App;
