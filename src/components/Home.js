import React from 'react';
import './Home.css'

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {bootcamp: 'Rookies', time: new Date(), clickedTime: 0}
    }
    render(){    
        setInterval(()=>{
            this.setState({
                time: new Date(),
            });
        }, 1000);        
        const clickGame = ()=>{
            this.setState({
                clickedTime: this.state.clickedTime++,
            });
            console.log(this.state.clickedTime);
            if(this.state.clickedTime % 3 == 0){
                alert("Hello! I am an alert box!! FIZZ");
            }
            else if(this.state.clickedTime % 5 == 0){
                alert("Hello! I am an alert box!! BUZZ");
            }
            else if(this.state.clickedTime % 5 == 0 && this.state.clickedTime % 3 == 0){
                alert("Hello! I am an alert box!! FIZZ && BUZZ");
            }
            else{
                alert("Next Click");
            }
          }
        return(
            <React.Fragment>    
                <h2>Welcome to {this.state.bootcamp}</h2>
                <h2>It is: {this.state.time.toLocaleTimeString()}</h2>
                <button id="btnbtn" onClick={()=>clickGame()}>Clicky Game </button>                                
            </React.Fragment>            
        );
    }
}
