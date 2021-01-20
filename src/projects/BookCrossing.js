import React from 'react';
import './projcss/BookCrossing.css';

import Books from './bookCrossingPhotos/bookCrossingBooks.png';
import Persona1 from './bookCrossingPhotos/Persona1.png';
import Persona2 from './bookCrossingPhotos/Persona2.png';
import Persona3 from './bookCrossingPhotos/Persona3.png';
import Persona4 from './bookCrossingPhotos/Persona4.png';
import Screen1 from './bookCrossingPhotos/screen1.png';
import Screen2 from './bookCrossingPhotos/screen2.png';
import Screen3 from './bookCrossingPhotos/screen3.png';
import Screen4 from './bookCrossingPhotos/screen4.png';
import PaperPrototype1 from './bookCrossingPhotos/paperPrototype1.png';
import PaperPrototype2 from './bookCrossingPhotos/paperPrototype2.png';
import FigmaPrototype from './bookCrossingPhotos/FigmaPrototype.png';
import AdobeXDPrototype from './bookCrossingPhotos/AdobeXD.png';


function BookCrossing() {
  return (
    <div className="BookCrossingMain">
      <div className="heading">
        <img className="books" src={Books} alt=""/>
        <h1 className="header">Book Crossing</h1>
      </div>
        <p className="projectAbout">
        Little Free Libraries is a non-profit organization where homeowners can build
        a library book exchange in their front yard that allow people walking to read and
        share these books. The main interaction design problem we tackled is that
        current applications that try to unite this community are not mobile friendly,
        which isn’t conducive to local residents exploring their neighborhood on-the-go.
        Our goal was to solve this problem and connect the community of book-lovers with
        an interactive mobile application.
        </p>
      <div className="phoneScreens">
        <img className="phoneScreen" src={Screen1} alt=""/>
        <img className="phoneScreen" src={Screen2} alt=""/>
        <img className="phoneScreen" src={Screen3} alt=""/>
        <img className="phoneScreen" src={Screen4} alt=""/>
      </div>
      <div className="Personas">
        <div className="title"> User Personas </div>
        <p className="description">
        Our first step while approaching this was to create user personas. Creating
        personas helped us understand our users' needs, experiences, behaviours and goals.
        After conducting interviews and research, we came up with 4 different personas that
        helped us identify the different user needs and expectations we needed to take into consideration.
        </p>
        <div className="personaPhotos">
          <img className="persona" src={Persona1} alt=""/>
          <img className="persona" src={Persona2} alt=""/>
          <img className="persona" src={Persona3} alt=""/>
          <img className="persona" src={Persona4} alt=""/>
        </div>
      </div>
      <div className="Paper Prototypes">
        <div className="title"> Paper Prototypes </div>
        <p className="description">
        Once we had an understanding of which tasks our app needed to solve and
        what goals we wanted our users to be able to accomplish with our app, we
        began paper prototyping. I sketched out storyboards to visually explore our
        user’s experience. This helped us understand our application flow, and allowed
        us to smoothly transition to creating a paper prototype as well.
        </p>
        <div className="PaperPrototypes">
          <img className="paperPrototype" src={PaperPrototype1} alt=""/>
          <img className="paperPrototype" src={PaperPrototype2} alt=""/>
        </div>
      </div>
      <div className="DigitalPrototypev1Figma">
        <div className="title"> Digital Prototype v1 - Figma </div>
        <p className="description">
        Once we had an understanding of which tasks our app needed to solve and
        what goals we wanted our users to be able to accomplish with our app, we
        began paper prototyping. I sketched out storyboards to visually explore
        our user’s experience. This helped us understand our application flow,
        and allowed us to smoothly transition to creating a paper prototype as well.
        </p>
        <div className="figmaImg">
          <img className="figmaPrototype" src={FigmaPrototype} alt=""/>
        </div>
      </div>
      <div className="FinalDigitalPrototypeAdobeXD">
        <div className="title"> Final Digital Prototype - Adobe XD </div>
        <p className="description">
        Our final deliverable was a functional prototype created in Adobe XD. Our
        prototype included sign in, create account, map, directions, library account
        management, and settings pages. We wanted to ensure we delivered an experience
        that catered to both users looking to find libraries and users looking to
        manage their own libraries. We tied these pages together in Adobe XD in
        order to have high functional and experiential fidelity.
        </p>
        <div className="AdobeXDImg">
          <img className="AdobeXDPrototype" src={AdobeXDPrototype} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BookCrossing;
