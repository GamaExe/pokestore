import React, {useState, useEffect} from 'react';
import './Catalogo.css';
import api from '../../services/api';
import {FiSearch} from 'react-icons/fi';

export default function Catalogo(props){

    const [pokemonsBase, setPokemonsBase] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState("");
    const arrPrecos = [0,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30,10,20,30]

    //BUSCA POR POKEMONS BASE
    useEffect(()=>{
        (async function(){
            try{
                const pokemonsList = []
    
                for(let i = 1; i<= 20; i++){
                    const id = await getPokeId(i);
                    const nome = await getPokeNome(id);       
                    const url = await getPokeUrl(id);
                    const precoMath = arrPrecos[i];
                    //const precoMath = Math.random() * (50 - 10) + 10;
    
                    const pokemonObj = {
                        id: id,
                        nome: nome,
                        url: url,
                        preco: parseFloat(precoMath.toFixed(0)) 
                    }
    
                    pokemonsList.push(pokemonObj);
                }
                setPokemonsBase(pokemonsList);
                setPokemons(pokemonsBase);  
            }catch(err){
                console.log(`Deu ruin no MAIN: ${err}`)
            }
        })()
        
    },[pokemonsBase])

    //FILTRO DE POKEMONS
    useEffect(()=>{
                
        const pokemonsList = pokemonsBase.filter((item)=>{
            const regexp = new RegExp(`${pokemon}`);
            if(regexp.test(item.nome)){
                return item
            }
        })
        setPokemons(pokemonsList);
    
    }, [pokemon, pokemonsBase])

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

    // async function getPokeDescricao(id){   
    //     return await api.get(`/pokemon/${id}`).then((res)=>{
    //         return res.data.sprites.front_default;
    //     });       
    // }

    function enviar(id, nome, url, preco){
        const data = {
            id,
            nome,
            url, 
            preco
        }

        let itens = [];

        if(localStorage.getItem('itens')){
            itens = JSON.parse(localStorage.getItem('itens'));
        }   

        itens.push(data);

        localStorage.setItem('itens', JSON.stringify(itens));

        props.render()

        alert("Produto adicionado ao carrinho")
    }

    return(
        <>
        <header>
        <div className="container">
            <div className="row">
            <form className="form-inline col-12">
                <FiSearch className="col-1" style={{ fontSize: "30px" }}/>
                <input value={pokemon} onChange={e => setPokemon(e.target.value)} className="form-control col-10 input_pesquisar" type="search" placeholder="Pesquisar" aria-label="Search"/>
                {/* <button className="btn btn-outline-primary button_pesquisar" type="submit">Pesquisar</button> */}
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
                    <div className="card-body card_dados">
                        <h5 className="card-title">{pokemon.nome}</h5>
                        <p className="card-text">{pokemon.descricao}</p>
                        <p className="card-text">R$: {pokemon.preco},00</p>
                        <button type="button" onClick={() => enviar(pokemon.id , pokemon.nome,pokemon.url, pokemon.preco)} className="btn btn-primary">Buy me!</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}