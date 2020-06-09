import React, { Component } from "react";
var urlImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "",
      id: "",
    };
  }

  componentWillMount() {
    this.setState({
      info: this.props.info,
      id: this.props.id + 1,
    });
  }
  render() {
    return (
      <div className="stats">
        <div className="imgWrapper">
          <img
            className="pokemonImg"
            src={urlImg + this.state.id + ".png"}
            alt="img"
          ></img>
        </div>
        {this.state.info.map((i, index) => {
          return (
            <div className="row stats">
              <div className="col-lg-4 col-md-6" id="stat-name">
                {i.stat.name}
              </div>
              <div className="progress p-0 mr-1 col-lg-7 col-md-5" key={index}>
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={`i.base_stat`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${i.base_stat}%` }}
                >
                  {`${i.base_stat}`}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Stats;
