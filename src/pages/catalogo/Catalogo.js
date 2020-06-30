import React, {useState, useEffect} from 'react';
import './Catalogo.css';
import api from '../../services/api';
import pokebola from '../../assets/pokebola.jpg';

export default function Catalogo(){

    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        api.get('/ability').then(res=>{
            const pokemonsList = res.data.results.map((pokemon, index) =>{
                const precoMath = Math.random() * (1000 - 50) + 50;  
                let pokemonObj = {
                    id: index + 1,
                    nome: pokemon.name,
                    preco: parseFloat(precoMath.toFixed(2)) 
                }
                api.get(`/characteristic/${index + 1 }`).then(resp=>{
                    pokemonObj.descricao = resp.data.descriptions[1].description
                })
                return pokemonObj;
            })
            setPokemons(pokemonsList);
        })
        
    },[])

    return(
        <>
        <header>
        <div className="container">
            <div className="row">
            <form className="form-inline col-12">
                <input className="form-control col-10 input_pesquisar" type="search" placeholder="Pesquisar" aria-label="Search"/>
                <button className="btn btn-outline-primary button_pesquisar" type="submit">Pesquisar</button>
            </form>
            </div>
        </div>
        </header>

        <div className="pokemons">
            {pokemons.map(pokemon=>(
                <div key={pokemon.id} className="card text-white bg-dark card_pokemon">
                    <img className="card-img-top" 
                        src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCG3hJi46hA4uI_venQAczww4TS4moXTHISA&usqp=CAU'
                        alt=''/>
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.nome}</h5>
                        <p className="card-text">{pokemon.descricao}</p>
                        <p className="card-text">R$: {pokemon.preco}</p>
                        <button to="#" className="btn btn-primary">Buy me!</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}