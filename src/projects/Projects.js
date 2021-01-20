import React from 'react';
import './projcss/Projects.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBMask, MDBView, MDBCol } from "mdbreact";
import { LinkContainer } from "react-router-bootstrap";

import LFLLogo from './projphotos/LFLLogo.png';
import MusicLogo from './projphotos/MusicLogo.png';
import RossLogo from './projphotos/RossLogo.png';
import BingeBuddyLogo from './projphotos/BingeBuddyLogo.png';
import GifterLogo from './projphotos/GifterLogo3.png';
import SFCityLogo from './projphotos/SFCityLogo2.png';



function Projects() {
  return (
    <div className="projectContainer">
    <div className="row1">
      <div style={{backgroundColor:'lightblue'}}>
        <MDBView className="tile" hover zoom>
            <img className="img-fluid" src={LFLLogo} alt=""/>
            <LinkContainer to="/bookcrossing">
            <MDBMask className="flex-center" overlay="stylish-strong">
            <MDBCol>
                <h1 className="white-text">Book Crossing</h1>
                <p className="white-text">A design project intended to connect the book-lover community.</p>
            </MDBCol>
            </MDBMask>
          </LinkContainer>
        </MDBView>
        </div>
        <MDBView className= "Music" hover zoom>
        </MDBView>
      <div style={{backgroundColor:'lightgreen'}}>
        <MDBView className="tile" hover zoom>
          <img className="img-fluid" src={MusicLogo} alt=""/>
          <LinkContainer to="/neednewmusic">
            <MDBMask className="flex-center" overlay="stylish-strong">
            <MDBCol>
                <h1 className="white-text">Need New Music?</h1>
                <p className="white-text">An interactice Python project to help users discover new music.</p>
            </MDBCol>
            </MDBMask>
          </LinkContainer>
        </MDBView>
      </div>
      <div style={{backgroundColor:'#fefec8'}}>
        <MDBView className="tile" hover zoom>
          <img className="img-fluid" src={RossLogo} alt=""/>
          <LinkContainer to="/rossregistrarsoffice">
            <MDBMask className="flex-center" overlay="stylish-strong">
            <MDBCol>
                <h1 className="white-text">Ross Registrar's Office</h1>
                <p className="white-text">A qualitative analysis project focused on the Ross Registrar's Office.</p>
            </MDBCol>
            </MDBMask>
          </LinkContainer>
        </MDBView>
      </div>
    </div>
    <div className="row2">
      <div style={{backgroundColor:'#ffdc99'}}>
        <MDBView className="tile" hover zoom>
          <img className="img-fluid" src={SFCityLogo} alt=""/>
          <LinkContainer to="/sfschoolfinder">
            <MDBMask className="flex-center" overlay="stylish-strong">
            <MDBCol>
                <h1 className="white-text">SF School Finder</h1>
                <p className="white-text">A website designed to help parents find their child the right school.</p>
            </MDBCol>
            </MDBMask>
          </LinkContainer>
        </MDBView>
      </div>
      <div style={{backgroundColor:'lavender'}}>
        <MDBView className="tile" hover zoom>
          <img className="img-fluid" src={GifterLogo} alt=""/>
          <LinkContainer to="/gifter">
            <MDBMask className="flex-center" overlay="stylish-strong">
            <MDBCol>
                <h1 className="white-text">Gifter</h1>
                <p className="white-text">A light-hearted mobile application designed to keep friends connected.</p>
            </MDBCol>
            </MDBMask>
          </LinkContainer>
        </MDBView>
      </div>
      <div style={{backgroundColor:'lightpink'}}>
        <MDBView className="tile" hover zoom>
          <img className="img-fluid" src={BingeBuddyLogo} alt=""/>
          <LinkContainer to="/bingebuddy">
            <MDBMask className="flex-center" overlay="stylish-strong">
            <MDBCol>
                <h1 className="white-text">Movie Binge Buddy</h1>
                <p className="white-text">A social media application designed for movie-lovers built in Java.</p>
            </MDBCol>
            </MDBMask>
          </LinkContainer>
        </MDBView>
      </div>
    </div>
    </div>
  );
}

export default Projects;
