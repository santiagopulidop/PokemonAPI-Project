import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h3>{this.props.name}</h3>;
  }
}

export default Name;
