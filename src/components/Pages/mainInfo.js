import React, { Component } from "react";
import Name from "../pokemonsInfo/pokemonName";
import { Link, Router } from "react-router-dom";
import Features from "../pokemonsInfo/featuresContainer";
import "../pokemonsInfo/info.css";

class MainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //results contains the very first json
      results: "",

      //id is the pokemon id, it's passed on props
      id: "",
      //name is the pokemon name, it's passed on props
      name: "",
      //url is get on results, it contains the url to be
      //query at nextQuery to get more info about the pokemon selected
      url: "",

      loading: true,
    };
    console.log(props);
  }

  componentDidMount = () => {
    let { id } = this.props;

    this.setState({
      id: id - 1,
    });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=25")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          results: data.results,
          url: data.results[this.state.id].url,
          loading: false,
          name: data.results[this.state.id].name,
        });
      });
  };

  render() {
    let { name, url, loading, id } = this.state;
    if (!loading) {
      return (
        <div className="mainWrapper container-fluid">
          <Name name={name} />
          <Features url={url} id={id} />
          <Link to="/">
            <button className="m-2 getBack">
              <svg
                class="bi bi-arrow-left-short"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </Link>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default MainInfo;
