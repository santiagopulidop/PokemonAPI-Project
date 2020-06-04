import React, { Component } from "react";
var urlImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
class Evolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chain: {},
      id: "",
      firstName: "",
      secondName: "",
      thirdName: "",
      firstId: "",
      secondId: "",
      thirdId: "",
      loading: true,
    };
  }
  componentWillMount = () => {
    this.setState({
      id: this.props.id + 1,
    });
  };

  componentDidMount = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.state.id}`)
      .then((response) => response.json())
      .then((data) => {
        fetch(data.evolution_chain.url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.chain.evolves_to[0].evolves_to[0]);
            this.setState({
              chain: data,
              loading: false,
              firstName: data.chain.species.name,
              secondName: data.chain.evolves_to[0].species.name,
              thirdName: data.chain.evolves_to[0].evolves_to
                ? null
                : data.chain.evolves_to[0].evolves_to[0].species.name,
              firstId: data.chain.species.url
                .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
                .slice(0, -1),
              secondId: data.chain.evolves_to[0].species.url
                .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
                .slice(0, -1),
              thirdId: data.chain.evolves_to[0].evolves_to
                ? null
                : data.chain.evolves_to[0].evolves_to[0].species.url
                    .replace("https://pokeapi.co/api/v2/pokemon-species/", "")
                    .slice(0, -1),
            });
          });
      });
  };

  render() {
    let { loading, firstName, secondName, thirdName } = this.state;
    if (!loading) {
      return (
        <div className="evolutions mt-5 mb-4">
          <h3 className="evolutionsTitle pl-2">Evolutions</h3>
          <ul>
            <li>
              {firstName}
              <img src={urlImg + this.state.firstId + ".png"} alt="img1"></img>
            </li>
            <li>
              {secondName}{" "}
              <img src={urlImg + this.state.secondId + ".png"} alt="img2"></img>
            </li>
            {this.state.thirdId === null ? null : (
              <li>
                {thirdName}
                <img
                  src={urlImg + this.state.thirdId + ".png"}
                  alt="img2"
                ></img>
              </li>
            )}
          </ul>
        </div>
      );
    }
    return <div>Load...</div>;
  }
}

export default Evolution;
