import React from 'react';
import './Home.css'

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: 'DUY'}
    }

    render(){
        return(
            <React.Fragment>
                 <nav id='navbar'>
                    <ul>
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>Contact</li></a>
                        <a href="#"><li>About</li></a>
                    </ul>
                    <div className="nav-details"> 
                        <p className = "nav-username" >{this.state.username}</p> 
                    </div> 
                 </nav>
                 
            </React.Fragment>
        );
    }
}