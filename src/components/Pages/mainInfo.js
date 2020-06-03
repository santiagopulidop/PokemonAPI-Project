import React, { Component } from "react";
import Name from "../pokemonsInfo/pokemonName";

class MainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstInfo: "",
      secondLoad: false,
      url: "",
    };
  }
  componentWillMount() {
    let { data } = this.props;
    this.setState({
      firstInfo: data,
    });
  }

  secondInfo = (e) => {
    console.dir(e.target);
    let newUrl = this.state.firstInfo[e.target.id].url;
    console.log(newUrl);
  };

  secondFetch = (url) => {
    fetch(url)
      .then((response) => {
        response.json();
      })
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div>
        {this.state.firstInfo.map((i, index) => {
          return (
            <Name
              nombre={i.name}
              key={index}
              scnd={this.secondInfo}
              id={index}
            />
          );
        })}
      </div>
    );
  }
}

export default MainInfo;
