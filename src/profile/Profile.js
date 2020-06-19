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


const Pic=(props)=>{

return(

<div>{props.Pic}</div>
)

}

export default Profile;