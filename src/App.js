import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import AboutMe from './AboutMe';
import ProjectsOverview from './projects/Projects';
import BookCrossing from './projects/BookCrossing';
import NeedNewMusic from './projects/NeedNewMusic';
import RROffice from './projects/RRO';
import BingeBuddy from './projects/BingeBuddy';
import SFSchool from './projects/sfSchool';
import Gifter from './projects/Gifter';

import LinkedInLogo from './photos/LinkedInLogo.png';
import InstagramLogo from './photos/InstagramLogo.png';
import GithubLogo from './photos/githubLogoColor.png';


function App() {
  return (
    <div className="App">
    <Router>
    <Navigation/>

    <Switch>
      <Route exact path="/"> <Home/> </Route>
      <Route exact path="/about"> <AboutMe/> </Route>
      <Route path="/overview"> <ProjectsOverview/> </Route>
      <Route exact path="/bookcrossing"> <BookCrossing/> </Route>
      <Route exact path="/neednewmusic"> <NeedNewMusic/> </Route>
      <Route exact path="/rossregistrarsoffice"> <RROffice/> </Route>
      <Route exact path="/bingebuddy"> <BingeBuddy/> </Route>
      <Route exact path="/sfschoolfinder"> <SFSchool/> </Route>
      <Route exact path="/gifter"> <Gifter/> </Route>
    </Switch>

  </Router>
    </div>
  );
}

function Navigation(){
  return (
    <div className="navigation">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/about"><Nav.Link>About Me</Nav.Link></LinkContainer>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <LinkContainer to="/overview"><NavDropdown.Item>Projects Overview</NavDropdown.Item></LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/bookcrossing"><NavDropdown.Item>Book Crossing</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/neednewmusic"><NavDropdown.Item>Need New Music?</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/rossregistrarsoffice"><NavDropdown.Item>Ross Registrar's Office</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/sfschoolfinder"><NavDropdown.Item>San Francisco School Finder</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/gifter"><NavDropdown.Item>Gifter</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/bingebuddy"><NavDropdown.Item>Movie Binge Buddy</NavDropdown.Item></LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

function Home(){
  return (
    <div className="home">
      <div className = "name">Thais Gonzalez</div>
      <div className = "bio">Master of Science in Information Student</div>
      <div className= "socialRow">
        <a href="https://www.linkedin.com/in/k-thais-gonzalez/"> <img className="socialLogoL" src={LinkedInLogo} alt=""/> </a>
        <a href="https://github.com/thaisgm"> <img className="socialLogoG" src={GithubLogo} alt=""/> </a>
        <a href="https://www.instagram.com/kthaisgonzalez/?hl=en"> <img className="socialLogo" src={InstagramLogo} alt=""/> </a>
      </div>
        <a className="email" href = "mailto: thaisgm@umich.edu">thaisgm@umich.edu</a>
    </div>
  )
}


export default App;
