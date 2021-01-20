import React from 'react';
import './projcss/SFSchool.css';

import Bridge from './SFSchoolPhotos/goldenGate3.png';
import TeamPhoto from './SFSchoolPhotos/GIThackteam.jpg';
import SFDiagram from './SFSchoolPhotos/SFDiagram.png';
import QuizPage from './SFSchoolPhotos/QuizPage.png';
import HomePageSpanish from './SFSchoolPhotos/HomePageSpanish.png';
import SchoolResults from './SFSchoolPhotos/SchoolResults.png';

function SFSchool() {
  return (
    <div className="SFSchoolMain">
      <div className="heading">
        <img className="bridge" src={Bridge} alt=""/>
        <h1 className="header">San Francisco School Finder</h1>
      </div>
        <p className="projectAbout">
        In 2018, I attended a Girls in Tech hackathon focused on coming up with technical
        solutions to Bay Area issues. After listening to a member of SF's Board of
        Education speak on the problems immigrant and lower-income families had
        with the current school assignment form, we decided to build a website to
        alleviate these pains and minimize the education gap currently growing in the Bay Area.
        </p>
        <img className="teamPhoto" src={TeamPhoto} alt=""/>
      <div className="Research">
        <div className="title"> Background and Research </div>
        <p className="description">
        The current school assignment form was an inaccesible and time consuming form,
        that many parents didn't even know about. However, the form allowed parents
        to highlight their top picks for schools for their children, which would be
        taken into consideration during the school assignment process. If the form
        wasn't filled out, the student was sent to the district assigned school, which
        potentially wouldn't be the right fit. The main issues we wanted to tackle with
        our web application were accessibility, simplicity, efficiency, consolidated, and informative.
        </p>
        <img className="SFDiagram" src={SFDiagram} alt=""/>
      </div>
      <div className="ProjectExecution">
        <div className="title"> Project Execution </div>
        <p className="description">
        Once we had an understanding of which tasks our app needed to solve and
        what goals we wanted our users to be able to accomplish with our app, we
        began rapid prototyping. Hackathons can be a blur, but we worked as efficiently
        as possible as a team in order to accomplish our main tasks. Our final prototype
        resulted in a quiz for parents to take in order to rank the importance of certain
        criteria like distance, after school programs, etc. We didn't want the quiz to appear
        like yet another form, so we designed a fun UX with simple and short questions.
        </p>
        <img className="QuizPage" src={QuizPage} alt=""/>
      </div>
      <div className="AdditionalFeatures">
        <div className="title"> Additional Features </div>
        <p className="description">
        The algorithm we developed took the responses of the parents and multiplied
        them against the initial rankings we gave the schools. Then, we ordered a
        list based on which schools most resembled the preferences of the parents.
        We made sure to include key information about the school on the list page,
        so the parents could scroll through efficiently.Once we had the quiz functionality
        optimized, we decided to implement the Google Translate API. This allowed our
        website to be available in any language, an important issue that many
        parents faced when researching public schools for their children. It was very
        rewarding to work on a project that was meaningful to the community, as well
        as the opportunity to present the finalized prototype to the Board of Education
        member and be able to discuss solutions.
        </p>
        <div className="AddFeaturesPhotos2">
          <img className="SchoolResults" src={SchoolResults} alt=""/>
          <img className="HomePageSpanish" src={HomePageSpanish} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default SFSchool;
