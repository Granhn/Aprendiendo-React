import React,{ Component } from 'react';

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}

export default class AjaxApis extends Component{
    
    state = {
        pokemones:[],
        contador: 0
    }
    pokemones = [];
    
    componentDidMount(){
        const url = "https://pokeapi.co/api/v2/pokemon?limit=7&offset=0";
        fetch(url)
        .then( res => res.json())
        .then((json) => {
            json.results.forEach( poke => {
                fetch(poke.url)
                .then(res => res.json())
                .then(poke => {
                    let pokemon = {
                        name: poke.name,
                        id: poke.id,
                        avatar: poke.sprites.front_default
                    }
                    //this.pokemones.push(pokemon);
                    const pokemones = [...this.state.pokemones, pokemon];
                    this.setState({pokemones});
                });
            });
        });
        //this.setState({pokemones: this.state.pokemones.push(...this.pokemones)});
        //console.log(this.pokemones);
        // console.log(this.state.pokemones);
        
    }

    render(){
        return(
            <>
                <h2>Peticiones asincronas en componentes de clase</h2>
                {this.state.pokemones.length > 0
                ? this.state.pokemones.map(el => <Pokemon  key={el.id} name={el.name} avatar={el.avatar} />)
                : <h2>Cargando</h2>} 
            </>
        )
    }   
} 