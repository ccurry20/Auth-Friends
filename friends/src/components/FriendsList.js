import React from "react";
//import { Route, Redirect } from "react-router";
import { axiosWithAuth } from "../axiosAuth";
import AddFriend from "./AddFriend";

class FriendsList extends React.Component {
  state = {
    friends:[]
  };

  componentDidMount() {
    this.getFriends(); 
  }
  getFriends = () => {
    axiosWithAuth()
    .get("/api/friends")
    .then(res => {
      this.setState({friends: res.data});
    });
  };

  render() {
    console.log(this.state.friends);
    return (
      <div>
        <p>Add Friend</p>
        <AddFriend />
        <p>List of Friends</p>
        {this.state.friends.map(friend => {

          return (
            <div key={friend.id}>
            <h1>{friend.name}</h1>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default FriendsList;