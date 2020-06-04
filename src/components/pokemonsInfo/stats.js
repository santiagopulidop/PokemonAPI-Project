import React, { Component } from "react";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "",
    };
  }

  componentWillMount() {
    this.setState({
      info: this.props.info,
    });
  }
  render() {
    return (
      <div className="stats mt-4">
        {this.state.info.map((i, index) => {
          console.log(i.stat.name);
          return (
            <div className="row">
              <div className="col-lg-4 col-md-6">{i.stat.name}</div>
              <div className="progress p-0 mr-1 col-lg-7 col-md-5" key={index}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={`i.base_stat`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: `${i.base_stat}%` }}
                >
                  {`${i.base_stat}%`}
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
