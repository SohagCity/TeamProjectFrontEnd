import React from 'react';
import '../App.scss';
import TeamPic from '../assets/Teampic.png'
import MaintainStaff from '../adminTools/maintainStaff'
import PropTypes from 'prop-types'

// Landing page for the app (the default website which opens upon first visit)
function HomePage(props) {
  const { children, value, index, ...other } = props


  return(
    <div>
        <br/>
      <MaintainStaff token={props.token}/>
    </div>

  );
}

export default HomePage;
