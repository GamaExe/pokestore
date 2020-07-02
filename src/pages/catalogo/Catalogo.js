import React, {useState, useEffect} from 'react';
import './Catalogo.css';
import api from '../../services/api';
import pokebola from '../../assets/pokebola.jpg';

export default function Catalogo(){

    const [pokemons, setPokemons] = useState([]);
    const [listaPokemon, setListaPokemon] = useState([]);

    useEffect(()=>{
        (async function(){
            try{
                const pokemonsList = []
    
                for(let i = 1; i<= 20; i++){
                    const id = await getPokeId(i);
                    const nome = await getPokeNome(id);       
                    const url = await getPokeUrl(id);
                    const precoMath = Math.random() * (50 - 10) + 10;
    
                    const pokemonObj = {
                        id: id,
                        nome: nome,
                        url: url,
                        preco: parseFloat(precoMath.toFixed(0)) 
                    }
    
                    pokemonsList.push(pokemonObj);
                }
                setPokemons(pokemonsList); 
            }catch(err){
                console.log(`Deu ruin no MAIN: ${err}`)
            }
        })()
        
    },[])

    async function getPokeId(id){   
        return await api.get(`/pokemon/${id}`).then((res)=>{
            return res.data.id;
        });       
    }

    async function getPokeNome(id){   
        return await api.get(`/pokemon/${id}`).then((res)=>{
            return res.data.name;
        });       
    }

    async function getPokeUrl(id){   
        return await api.get(`/pokemon/${id}`).then((res)=>{
            return res.data.sprites.front_default;
        });       
    }

    function enviar(nome, preco){
        const pokemon = {
            nome, 
            preco
        }
        setListaPokemon(pokemon);
    }

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
                        src ={pokemon.url}
                        alt=''/>
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.nome}</h5>
                        <p className="card-text">{pokemon.descricao}</p>
                        <p className="card-text">R$: {pokemon.preco},00</p>
                        <button type="button" onClick={() => enviar(pokemon.nome, pokemon.preco)} className="btn btn-primary">Buy me!</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}