import React, { Fragment } from "react"; 


function UserCard(props) {
    console.log(props); 
    return (
        <>
            <h1>Github Project</h1>
            <img src={props.state.pfp} alt="logo"></img>
            <p>Followers: {props.state.followers}</p>
            <p>Following: {props.state.following}</p>
            <p>{props.state.bio}</p>
        </>
    )
}

export default UserCard; 