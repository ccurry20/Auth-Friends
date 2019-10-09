import React from "react";
import { axiosWithAuth } from "../axiosAuth";
import "../index.css";

class AddFriend extends React.Component {
    state ={
        id:0,
        name:"", 
        age:"",
        email:""
    };

    handleChange = e => {
        this.setState({
            ...this.state, 
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        //e.preventDefault();
        axiosWithAuth()
        .post("/api/friends", this.state)
        .then(res => {
        });
    };

    render() {
        return (
            <form className="input" onSubmit = {this.handleSubmit}>
                <input
                type ="text"
                name = "name"
                placeholder="name"
                value = {this.state.name}
                onChange= {this.handleChange}
                />
                <input 
                type="number"
                name="age"
                placeholder="age"
                value ={this.state.age}
                onChange ={this.handleChange}
                />
                <input 
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
                <button className="button" type="submit">Submit</button>
            </form>
        );
    }
}
export default AddFriend;