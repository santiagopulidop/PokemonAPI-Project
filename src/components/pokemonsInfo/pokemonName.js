import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h3 id={this.props.id} onClick={this.props.scnd}>
        {this.props.nombre}
      </h3>
    );
  }
}

export default Name;
