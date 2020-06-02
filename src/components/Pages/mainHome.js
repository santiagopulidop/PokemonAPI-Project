import React, { Component } from 'react';
import Title from '../pokemons/title'
import Search from '../pokemons/searchBar'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            results : undefined
         }
    }

componentDidMount =() =>{
    fetch('http://pokeapi.salestock.net/api/v2/pokemon')
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        this.setState({
            results : data.results
        })
    })
}
    render() { 
        return ( 
            <>
                <Title/>
                <Search/>
            </>
         );
    }
}
 
export default Home;