import React, { Component } from "react";

export default class Toggle extends Component {
  
  state = {
    show: false,
  };

  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        {this.state.show && this.props.children}
        <button className="button" onClick={this.toggle}>{this.state.show ? "hide": "start"} </button>
      </div>
    );
  }
}