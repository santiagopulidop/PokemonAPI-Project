import React, { Component } from "react";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  componentDidMount = () => {
    let { url } = this.props;
    this.setState({
      url: url,
    });
    console.log(this.props.url);
  };
  render() {
    return <div>{this.props.url}</div>;
  }
}

export default Features;
