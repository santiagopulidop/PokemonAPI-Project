import React, { Component } from "react";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      id: "",
      loading: true,
    };
  }
  componentWillMount = () => {
    this.setState({
      url: `https://pokeapi.co/api/v2/pokemon/` + this.props.id,
      id: this.props.id,
    });
  };

  componentDidMount = () => {
    if (this.setState.url !== "") {
      fetch(this.state.url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            loading: false,
          });
          console.log(data);
        });
    }
  };

  render() {
    let { loading } = this.state;
    if (!loading) {
      return <div>{this.props.url}</div>;
    }
    return <div>Loading...</div>;
  }
}

export default Features;
