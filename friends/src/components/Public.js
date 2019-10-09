import React from 'react';
import { Link } from "react-router-dom";
//import friends from './friends.png';

class Public extends React.Component {
    render() {
        return (
            <div>
                <h1>Friend's List</h1>
                <p>Are you my Friend?</p>
                <Link to="./login">Login</Link>
            </div>
        );
    }
}

export default Public; 