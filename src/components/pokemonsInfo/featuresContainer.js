import React, { Component } from "react";
import ProfileTitle from "./profileTitle";
import Stats from "./stats";
import Evolution from "./evolution";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      id: "",
      info: "",
      abillities: "",
      weight: "",
      height: "",
      loading: true,
    };
  }
  componentWillMount = () => {
    this.setState({
      url: this.props.url,
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
            info: data,
            abilities: data.abilities,
            weight: data.weight,
            height: data.height,
          });
        });
    }
  };

  render() {
    let { loading, info, id } = this.state;
    if (!loading) {
      return (
        <div className="container info">
          <Stats info={info.stats} id={id} />
          <div className="features mt-5 mb-4">
            <ProfileTitle />
            <div className="row pl-2">
              <div className="col-lg-12">
                <b>Abilities:</b>
                {this.state.abilities.map((i, index) => {
                  return (
                    <span className="m-1" key={index}>
                      {i.ability.name}
                    </span>
                  );
                })}
              </div>
              <div className="col-lg-12">
                <b>weight:</b> {this.state.weight}
              </div>
              <div className="col-lg-12">
                <b>height:</b> {this.state.height}
              </div>
            </div>
          </div>
          <Evolution id={this.state.id} />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default Features;
