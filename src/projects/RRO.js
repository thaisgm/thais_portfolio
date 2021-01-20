import React from 'react';
import './projcss/RRO.css';

import BlockM from './RROPhotos/BlockM.png';
import RossBuilding from './RROPhotos/rossbuilding.jpg';
import AffinityWall from './RROPhotos/AffinityWall.png';

function RROffice() {
  return (
    <div className="RROMainPage">
      <div className="heading">
        <img className="BlockM" src={BlockM} alt=""/>
        <h1 className="header">Ross Registrar's Office</h1>
      </div>
      <p className="projectAbout">
      As part of a team of student consultants, I had the opportunity in the Fall of 2020 to analyze
      the Ross Registrar's Office and evaluate their functionality. The systems at
      the Ross Registrar's office had not kept pace with the growing complexity at the school.
      The overwhelming complexity of operations and processes for course scheduling, student overrides,
      and communications are became clear after conducting research. Thus, the RRO’s
      administration is sought an “overhaul” and final report of recommendations from our team.

      </p>
      <div className="RossPhoto">
        <img className="RossBuilding" src={RossBuilding} alt=""/>
      </div>
      <div className="backgroundSection">
        <div className="titleMusic"> Background Research and Analysis</div>
        <p className="description2">
        To begin the project, we developed interview protocols and conducted 10
        stakeholder interviews. After each innterview, we would hold an affinity
        wall session in order to analyze the information. We clustered interview
        notes based on similarities and made interpretations based on common
        clusters in order to develop our findings. Below, is our final affinity wall.
        Hard to believe, but with this processs, we distilled our research into 4 key findings:
        </p>
        <p className="description2">
        1. Technical limitations (i.e. lack of software compatibility) and
        lack of documentation led to communication discrepancies and outdated
        process notes.
        </p>
        <p className="description2">
        2. Complex organizational structure and informational resources wasn't
        ill designed for users seeking help.
        </p>
        <p className="description2">
        3. Lack of standardization and high volume of manual input required with
        regards to course scheduling made this operation incredibly difficult,
        particularly across different degree programs.
        </p>
        <p className="description2">
        4. Inability to monitor ticket progress and time-consuming procedure
        caused problems for both internal and external users.
        </p>
        <div className="AffinityWallSection">
          <img className="AffinityWall" src={AffinityWall} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default RROffice;
