import React from 'react'
import '/.App.js'


const Profile = (props) => {

   


    return (
        <>
            <p>{props.FullName}</p>
            <p>{props.Bio}</p>
            <p>{props.Profession}</p>
        </>


    )

}
Profile.propTypes={
    Profession,FullName,Bio:PropTypes.string
    };



export default Profile;
