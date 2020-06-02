import React, { Component } from 'react';
import Title from '../pokemons/title'
import Search from '../pokemons/searchBar'
import MainInfo from './mainInfo'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            resluts :'',
            loading: true
         }
    }

componentDidMount =() =>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    .then(response => response.json())
    .then(data =>{
       
        this.setState({
            results : data.results,
            loading: false

        })
        
        
    })
}
    render() { 
        
        if(this.state.loading===false){

            return ( 
                <>
                    <Title/>
                    <Search/>
                    <MainInfo />
                </>
             );
        }
        return(
            <div>Loading...</div>
        )
    }
}
 
export default Home;