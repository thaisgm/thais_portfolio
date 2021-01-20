import React from 'react';
import './projcss/NeedNewMusic.css';

import NeedNewMusicLogo from './MusicPhotos/musciPageIcon.png';
import GenreList from './MusicPhotos/genreList.png';
import NewsList from './MusicPhotos/newsList.png';
import Spotify from './MusicPhotos/Spotify.png';
import Recommendations from './MusicPhotos/Recommendations.png';
import SQLResults from './MusicPhotos/SQLResults.png';

function NeedNewMusic() {
  return (
    <div className="NeedNewMusicMain">
      <div className="heading">
        <img className="NeedNewMusicLogo" src={NeedNewMusicLogo} alt=""/>
        <h1 className="header">Need New Music?</h1>
      </div>
      <p className="projectAbout">
      Need New Music? is a Python application I built for my Master’s Intermediate
      Python Programming final project. My goal was to create a music research
      and recommendation application for users that incorporates the Spotify API,
      web scraping, caching, and SQL. The final program allowed users to explore music by genres and
      receive personalized recommendations. In the future, I envision adding a more
      robust user interface and improved interactive capabilities.
      </p>
      <div className="musicPhotos">
        <img className="GenreList" src={GenreList} alt=""/>
        <img className="NewsList" src={NewsList} alt=""/>
      </div>
      <div className="infoSection">
        <div className="titleMusic"> Web Scaping, Caching, and Spotify API </div>
        <p className="description2">
        When starting the application, users are presented with genre options. I used
        web scraping on https://www.udiscovermusic.com/ in order to access the list
        of genres provided. Additionally, if a user chooses to explore a genre further,
        I pull the top articles of a particular genre and provide the links to
        the user that they can open from command line.
        </p>
        <p className="description2">
        Users can also explore recommendations based on the genre they chose.
        When it comes to recommendations, they are provided by spotify through
        the ‘genre seed’ recommendation API request. I provide the genre seeds,
        as selected by the user. From there, a spotify API request is sent and
        then they are presented with 10 albums recommended for them based on
        the genre. Other factors that go into the recommendation include popularity,
        energy, and it’s limited to the US market. These albums are automatically
        added to the SQL database after being checked for duplicates.
        </p>
        <div className="spotifySection">
          <img className="Spotify" src={Spotify} alt=""/>
          <img className="Recommendations" src={Recommendations} alt=""/>
        </div>
      </div>
        <div className="titleMusic"> SQL Database </div>
          <p className="description2">
            Last part of this project was implementing a SQL databse. The database
            grew as usage of the application increased. After opening the application,
            users can choose to explore the databse, and pull access to different albums
            and the following information associated with those albums: album name, album artist,
            album release date, and spotify link. In further versions of this project, I
            imagine this collection being displaying as a vintage record collection would be,
            and users could scroll through and interactive with the album art and data.
          </p>
          <div className="spotifySection">
            <img className="Spotify" src={SQLResults} alt=""/>
          </div>
    </div>
  );
}

export default NeedNewMusic;
