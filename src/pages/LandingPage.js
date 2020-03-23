import React from 'react';
import '../App.scss';
import TeamPic from '../assets/Teampic.png'

// Landing page for the app (the default website which opens upon first visit)
function LandingPage() {
  return(
    <div>
        <h1>Welcome to the ATS System for "AirVia"</h1>
        <h1>Please sign in to get access</h1>
        <br/> <br/>
        <h3> System brought to you by </h3>
        <img alt='Team 6ix' style={{ width: '200px' }} src={TeamPic}/>
    </div>

  );
}

export default LandingPage;
