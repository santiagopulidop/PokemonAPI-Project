import React, { Component } from "react";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }

  componentDidMount = () => {
    let { id } = this.props;
    this.setState({
      id: id,
    });
    console.log(this.props.url);
  };

  render() {
    return <div>{this.props.url}</div>;
  }
}

export default Features;
