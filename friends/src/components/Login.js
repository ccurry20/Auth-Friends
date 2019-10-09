import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';
//import FriendsList from "./FriendsList";

const Login = (props) => {
    const [credentials, setCredentials] = useState({});

    const login = e => {
        e.preventDefault(); 
        axiosWithAuth().post('/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('./protected');
        })
    }

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value,
        });
    }
    

    return (
        <div>
            <form onSubmit = {login}>
                <input 
                type="text"
                name="username"
                value = {credentials.username}
                onChange ={handleChange}
                />
                <input 
                type ="password"
                name ="password"
                value ={credentials.password}
                onChange={handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    )
}


export default Login; 