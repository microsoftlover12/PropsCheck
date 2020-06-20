import React from 'react';
import logo from './logo.svg';
import './App.css';
import './profile/Profile.js';
import PropTypes from 'prop-types';
import Profile from './profile/Profile.js';

const ProfileInformations = ({ FullName: 'Yosr Safta', Bio: 'microsoft lover', Profession: 'student' })

function App(props) {
  const handleName=(name)=>{
  
  
  alert(name)
  
  }
  return (
    <div className="App" style={{border:'solid 2px green',maxwidth:'100vw',color:blur,justifyContent:ClientRect}}>
<Profile FullName={ProfileInformations.FullName}  Bio={ProfileInformations. Bio}  Profession={ProfileInformations.Profession}/>
    </div >
  );
}










}
export default App;




