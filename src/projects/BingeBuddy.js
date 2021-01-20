import React from 'react';
import './projcss/BingeBuddy.css';

import BBHome from './BingeBuddyPhotos/BBHome.png';
import BBLogin from './BingeBuddyPhotos/BBLogin.png';
import BBProfile from './BingeBuddyPhotos/BBProfile.png';
import BBSearch from './BingeBuddyPhotos/BBSearch.png';
import BBSearchResult from './BingeBuddyPhotos/BBSearchResult.png';
import BingeBuddyLogo from './projphotos/BingeBuddyLogo.png';


function BingeBuddy() {
  return (
    <div className="BingeBuddyMain">
      <div className="heading">
        <img className="BingeBuddyLogo" src={BingeBuddyLogo} alt=""/>
        <h1 className="header">Movie Binge Buddy</h1>
      </div>
      <p className="projectAbout2">
      Movie Binge Buddy is an mobile app I made in a group with three other developers.
      We used Java in Android Studio in order to develop the App. Our idea was to
      socialize the movie and review process. This would allow people to hear
      recommended shows from their friends, and hopefully get out of their comfort
      zone and watch shows besides The Office. The user account creation process
      was developed with Cloud Firestore. Once you create an account and login,
      users get to develop a profile. Their profile includes a profile picture,
      top ten lists for their all time favorite movies and shows, and all the
      reviews they've made. Also, they can add followers in order to see more reviews.
      </p>
    <div className="phoneScreens">
      <img className="BBScreen" src={BBLogin} alt=""/>
      <img className="BBScreen" src={BBHome} alt=""/>
      <img className="BBScreen" src={BBProfile} alt=""/>
    </div>
      <div className="titleBB"> Search Functionality </div>
      <p className="descriptionBB">
      Next, I worked on the search functionality. This page allowed users to type
      in a title, and using a movie database API, search through various titles to
      find the mathcing one. From here, users can click titles for more information
      and to leave a review. The search function is built in to the movie database API,
      and I displayed the results in order of relevancy. The movie poster, title, and
      description is pulled from the API and displayed to the user. I had to use
      string parsing in order to collect the right information since the API object
      returned wasn't consistent. From here, they can choose to leave a review on the
      movie and share it with friends! Even though it was our first time developing
      within Android Studio, our efforts went smoothly. Although we didn't achieve all
      we wanted to in the brief amount of time we worked on the app, we were proud to
      have a completed user experience flow to demonstrate. Personally, I was happy that
      I was able to work with the movie database API and display the proper information
      because it was a complex and intensive API to work with.
      </p>
      <div className="SearchPhotos">
        <img className="BBScreen2" src={BBSearch} alt=""/>
        <img className="BBScreen2" src={BBSearchResult} alt=""/>
      </div>
    </div>
  );
}

export default BingeBuddy;
