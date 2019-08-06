import React from 'react'; 
import UserCard from './UserCard';

class UserFollowers extends React.Component {
    constructor() {
        super(); 
        
        this.state = {
            followers: []
        }
    }

    
    componentDidMount() {
        this.fetchFollowers(); 
    }


    fetchFollowers = () => {
        // this.state.followersArray.forEach(login => {
        fetch(`https://api.github.com/users/ElijahMcKay/followers`)
        .then(response => {
            // first promise resolution is used to format the data. 
            return response.json();
            
        }) 
        .then(user => {
            console.log(user)
            this.setState({followers: user})
        })
        .catch(err => {
            console.log(err);
            // HANDLE THIS ERRORf
        });
    };

    render() {
            console.log(this.state); 
        return (
            <div>
            {this.state.followers.map(item => {
                return (<div>
                    <h2>Followers</h2>
                    <img src={item.avatar_url} alt="logo"></img>
                    <p>{item.id}</p>
                    <p>{item.url}</p>
                </div>
                )
            })}
            </div>
        )
    }
}

export default UserFollowers
