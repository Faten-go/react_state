import React, { Component } from "react";
import Toggle from "./Components/Toggle";
import imgSrc from './food-tech.jpg';
import './App.css'
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
          
        <Toggle>
          <div className="cardProfile">
            <img src={imgSrc} alt='' width="250px"/>
            <div>
              <h4>Full Name: Faten Fadhlaoui</h4>
              <h4>Bio: Food Tech Engineer</h4>
              <h4>Profession: Web Dev Apprentice</h4>
            </div>
          </div>
          <h3>Count since Component is mounted: {this.state.count} </h3>
        </Toggle>
      </div>
    );
  }

  componentDidMount(){ 
    this.myInterval = setInterval (()=>
      { this.setState({count : this.state.count + 1})
    } , 1000 )
  }

}
