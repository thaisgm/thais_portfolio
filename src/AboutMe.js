import React from 'react';
import TextLoop from "react-text-loop";
import './AboutMe.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import ThaisCartoon from './photos/thaisCartoon.jpg';
import LinkedInLogo from './photos/LinkedInLogo.png';
import InstagramLogo from './photos/InstagramLogo.png';
import GithubLogo from './photos/GithubLogo.png';

function AboutMe() {
  return (
    <div className="AboutMePage">
      <div className="column1">
        <h1 className="Hi">Hi, I'm Thais Gonzalez </h1>
        <p className="paragraph1">
        My journey into the world of technology began with my childhood passion
        for fantasy and science fiction novels. I realized the closest I could get
        to the magic I grew up reading was through the new technologies of our future!
        </p>
        <p className="paragraph">
        I graduated from the Ross School of Business, with
        concentrations in product development and technology. My business background
        really helped me gain critical communication and management skills, as well
        as providing fuel to my entrepreneurial spirit. My love for programming also
        bloomed, and I completed a software engineering fellowship in San Francisco
        as well as computer science coursework throughout my 4 years. Several internships and impactful
        classes began pushing me towards a new passion: harnessing exciting technologies
        to help promote equity and sustainability.
        </p>
        <p className="paragraph">
        This new focus led me to pursue a MS in Information at Michigan,
        concentrating in UX Research and Design and Agile Development. I hope
        to apply user-centered design thinking to complex problems in order to
        create intuitive and inclusive solutions.
        </p>
      </div>
      <div className="column2">
        <Image className="cartoon" src={ThaisCartoon} roundedCircle/>
        <div className="textLoop">
        <span className="value">I value </span>
        <TextLoop className="value2" interval="3000">
          <div className="loopText">teamwork</div>
          <div className="loopText1">learning</div>
          <div className="loopText">authenticity</div>
          <div className="loopText">creativity</div>
          <div className="loopText">integrity</div>
          <div className="loopText">curiosity</div>
          <div className="loopText">inclusion</div>
          <div className="loopText">respect</div>
          <div className="loopText">balance</div>
          <div className="loopText">compassion</div>
          <div className="loopText">challenge</div>
          <div className="loopText">determination</div>
          <div className="loopText">humor</div>
          <div className="loopText">nature</div>
          <div className="loopText">growth</div>
        </TextLoop>
        </div>
        <p className="paragraph">
        As a life-long athlete, I have always valued teamwork. As a two-time
        BIG10 Softball Champion at Michigan, I was a first hand witness to the
        power that a group of women with diverse backgrounds and experiences
        can wield. It has been and will always be an honor to be one of the
        twenty women in the world that get to wear the Block M and represent
        Michigan Softball.
        </p>
        <Button className="downloadBtn" variant="primary" href="https://docs.google.com/document/d/1WHTl7iw6aocKBMW8-Crsblx4COxq2rWCQ_DYHIO9QmU/edit?usp=sharing">
          View my Resume!
        </Button>
      </div>
    </div>
  )
}

function Not() {
  return (
    <div className="AboutMePage">
      <div className="section1">
        <h1 className="Hi">Hi, I'm Thais Gonzalez </h1>
        <div className="subsection1">
          <Image className="cartoon" src={ThaisCartoon} roundedCircle/>
          <div className="social">
            <a href="https://www.linkedin.com/in/k-thais-gonzalez/"> <img className="socialLogoL" src={LinkedInLogo} alt=""/> </a>
            <a href="https://www.instagram.com/kthaisgonzalez/?hl=en"> <img className="socialLogo" src={InstagramLogo} alt=""/> </a>
            <a href="https://github.com/thaisgm"> <img className="socialLogoG" src={GithubLogo} alt=""/> </a>
          </div>
        </div>
      </div>
      <div className= "section2">
        <p className="paragraph1">
        My journey into the world of technology began with my childhood passion
        for fantasy and science fiction novels. I realized the closest I could get
        to the magic I grew up reading was through the new technologies of our future!
        </p>
        <p className="paragraph">
        I graduated from the Ross School of Business, with
        concentrations in product development and technology. My business background
        really helped me gain critical communication and management skills, as well
        as providing fuel to my entrepreneurial spirit. My love for programming also
        bloomed, and I completed a software engineering fellowship in San Francisco
        as well as computer science coursework throughout my 4 years. Several internships and impactful
        classes began pushing me towards a new passion: harnessing exciting technologies
        to help promote equity and sustainability.
        </p>
        <p className="paragraph">
        This new focus led me to pursue a MS in Information at Michigan,
        concentrating in UX Research and Design and Agile Development. I hope
        to apply user-centered design thinking to complex problems in order to
        create intuitive and inclusive solutions.
        </p>
        <div className="textLoop">
        <span className="value">I value </span>
        <TextLoop className="value2" interval="3000">
          <div className="loopText1">learning</div>
          <div className="loopText">authenticity</div>
          <div className="loopText">teamwork</div>
          <div className="loopText">creativity</div>
          <div className="loopText">integrity</div>
          <div className="loopText">curiosity</div>
          <div className="loopText">inclusion</div>
          <div className="loopText">respect</div>
          <div className="loopText">balance</div>
          <div className="loopText">compassion</div>
          <div className="loopText">challenge</div>
          <div className="loopText">determination</div>
          <div className="loopText">humor</div>
          <div className="loopText">nature</div>
          <div className="loopText">growth</div>
        </TextLoop>
        <span className="value">. </span>
        </div>
        <p className="paragraph">
        As a life-long athlete, I have always valued teamwork. As a two-time
        BIG10 Softball Champion at Michigan, I was a first hand witness to the
        power that a group of women with diverse backgrounds and experiences
        can wield. It has been and will always be an honor to be one of the
        twenty women in the world that get to wear the Block M and represent
        Michigan Softball.
        </p>
        <p>
        <Button className="downloadBtn" variant="primary" href="https://docs.google.com/document/d/1WHTl7iw6aocKBMW8-Crsblx4COxq2rWCQ_DYHIO9QmU/edit?usp=sharing">
          View my Resume!
        </Button>
        </p>
      </div>

    </div>
  )
}

export default AboutMe;
