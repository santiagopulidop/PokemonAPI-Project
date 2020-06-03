import React, { Component } from "react";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 0,
    };
  }

  componentDidMount = () => {
    let { url } = this.props;
    this.setState({
      url: this.props.url,
    });
    console.log(this.props.url);
  };
  render() {
    return <div>{this.props.url}</div>;
  }
}

export default Features;
