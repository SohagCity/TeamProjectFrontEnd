import React from 'react';
import '../App.scss';
import TeamPic from '../assets/Teampic.png'
import MaintainStaff from '../components/maintainStaff.js'

// Landing page for the app (the default website which opens upon first visit)
function HomePage() {

  return(
    <div>
        <br/>
      <MaintainStaff/>
    </div>

  );
}

export default HomePage;
