import React from 'react';
import './projcss/Gifter.css';

import Present from './GifterPhotos/GifterLogo.png';
import GifterHome from './GifterPhotos/GifterDemohome.png';
import GifterMainScreen from './GifterPhotos/GifterMainScreenDemo.png';
import Twillio from './GifterPhotos/twillio.png';
import Fuzzies from './GifterPhotos/fuzzies.png';

function Gifter() {
  return (
    <div className="GifterMain">
      <div className="heading">
        <img className="Present" src={Present} alt=""/>
        <h1 className="header">Gifter</h1>
      </div>
        <div className="firstGroup">
          <div className="textColumn">
            <p className="projectAbout">
            In 2018, I had the opportunity to participate in an open-ended Hackathon with a few
            close friends in San Francisco. We wanted to build the app utilizing both
            our creative backgrounds (in graphic design and creative writing) and our
            knowledge of React Native. We finished working in less than a day and truly
            enjoyed branching out and using other passions and skills beyond coding.
            </p>
            <p></p>
            <p></p>
            <p></p>
            <p className="projectAbout">
            I've always seized any opportunity to participate in any Hackathon that I could.
            To me, Hackathons ignite the creative and problem-solving juices
            of developers and provide an incredible opportunity for learning and collaboration.
            The time limits provide pressure and allows developers to build upon the purest
            form of their idea in order to rapidly build a final prototype. I usually come
            out of the experience needing sleep, but also inspired and joined by new friends.
            </p>
          </div>
          <img className="GifterHome" src={GifterHome} alt=""/>
        </div>
        <div className="secondGroup">
          <img className="GifterMainScreen" src={GifterMainScreen} alt=""/>
          <div className="textColumn">
            <div className="title"> Project Inception </div>
            <p className="description">
            Gifter is a mobile application designed to expand upon the popularity
            of emoticons by sending something more significant to your friends: a
            uniquely curated text message with light hearted and one-of-a-kind content.
            When you open Gifter, you are greeted by a screen with bright colors and 6 categories.
            These are labelled Joke, Fortune, Flirt, Fuzzies, Mike-ism (dedicated to a group member), and Roast.
            I was in charge of app development, and I used flexbox to create the fun and simple UI
            and Adobe Illustrator to create the graphics that illustrate each category.
            </p>
          </div>
        </div>
      <div className="AdditionalFeatures">
        <div className="title2"> Project Execution </div>
        <p className="description2">
        Next, I worked on the backend by implementing the Twillio API so users can
        send a "gift" (either a joke, roast, flirt, etc.) to their friends from a
        Twillio number. The messages are randomly selected from a database of texts
        that a member of our team who has experience in comedic sketches came up with.
        Even though it was my first time implementing the Twillio API, in React Native,
        I was able to apply their documentation smoothly to the mobile platform. Also,
        many of the design decisions were easy to adjust once the flexbox containers
        were set up and organized. Overall, this app was a pleasure to work on because
        it was our unique idea that allowed us the opportunity to be imaginative.
        </p>
        <div className="AddFeaturesPhotos">
          <img className="Fuzzies" src={Fuzzies} alt=""/>
          <img className="Twillio" src={Twillio} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Gifter;
