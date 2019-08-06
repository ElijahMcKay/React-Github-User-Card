import React from 'react';
import './App.css';

import "./index.css"; 

import UserCard from "./components/UserCard"
import UserFollowers from "./components/UserFollowers"

class App extends React.Component {
  constructor() {
    super(); 

    this.state = {
      // followersArray: [
      //     'tetondan', 
      //     'dustinmyers', 
      //     'justsml', 
      //     'luishrd', 
      //     'bigknell'
      //   ],
    }
  }

  componentDidMount() {
    this.fetchFollowers(); 
  }


  fetchFollowers = () => {
    // this.state.followersArray.forEach(login => {
      fetch(`https://api.github.com/users/ElijahMcKay`)
      .then(response => {
        // first promise resolution is used to format the data.
        return response.json();
      })
      .then(user => this.setState({ pfp: user.avatar_url, bio: user.bio, followers: user.followers, following: user.following }))
      .catch(err => {
        console.log(err);
        // HANDLE THIS ERROR
      });
  };



  render() {
    return (
      <div>
        <UserCard state={this.state}/>
        <UserFollowers />
      </div>
    )
  }

}

export default App; 