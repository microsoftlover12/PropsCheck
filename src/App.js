import React from 'react';
import logo from './logo.svg';
import './App.css';
import './profile/Profile.js';
import PropTypes from 'prop-types';
import Profile from './profile/Profile.js';

const ProfileInformations = ({ FullName: 'Yosr Safta', Bio: 'microsoft lover', Profession: 'student' })

function App(props) {
  return (
    <div className="App" style={{border:'solid 2px green',maxwidth:'100vw',color:blur,justifyContent:ClientRect}}>
<Profile FullName={ProfileInformations.FullName}  Bio={ProfileInformations. Bio}  Profession={ProfileInformations.Profession}/>
    </div >
  );
}





ReactComponent.propTypes={
Profession,FullName,Bio:PropTypes.string


};



function handleName(props){
  return(
  
  alert({FullName})
  
  );
  
  }
  export default handleName;
}
export default App;




