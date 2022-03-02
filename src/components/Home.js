import React from 'react';
import './Home.css'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {bootcamp: 'Rookies'}
    }

    render(){
        return(
            <React.Fragment>
                <h2>Welcome to {this.state.bootcamp}</h2>
            </React.Fragment>
        );
    }
}