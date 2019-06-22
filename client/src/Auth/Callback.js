import React, { Component } from 'react'
import { Link } from "react-router-dom";

// this.props.auth.handleAuthenticated();
class Callback extends Component {
    componentDidMount(){
        this.props.auth.handleAuthenticated();
    }
    render() {
        return (
            <div>
                <p>Loading...</p>
                <Link to="/">Go Home</Link>
                <Link to ="/dashboard">Go to Dashboard</Link>
                
            </div>
        )
    }
}
export default Callback; 