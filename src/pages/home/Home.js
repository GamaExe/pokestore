import React, {useState} from 'react';
import './Home.css';
import Catalogo from '../catalogo/Catalogo';
import Carrinho from '../carrinho/Carrinho';
import {FiShoppingCart, FiShoppingBag} from 'react-icons/fi';
import {MdAccountBox} from 'react-icons/md';
import {Link} from 'react-router-dom';

export default function Home(){

    const [atualizar, setAtualizar] = useState(false);

    return(
        <div>
            <div className="row">
                <header className="col-12">
                    <nav className="navbar navbar-light bg-dark text-white justify-content-between">
                        <div>
                            <FiShoppingBag style={{ fontSize: "30px" }}/>
                            <Link to="/" className="navbar-brand  text-white" style={{paddingLeft:"10px" }}>Pokestore</Link>
                        </div>
                        <div>
                            <FiShoppingCart style={{ fontSize: "30px" }}/>
                            <MdAccountBox style={{ fontSize: "40px", paddingLeft:"10px"}}/>
                        </div>
                    </nav>
                </header>
            </div>
            <div className="row conteudo">
                <div className="col-8">
                    {/* <Catalogo render={()=>{setAtualizar(!atualizar); console.log(atualizar)}} /> */}
                    <Catalogo render={()=>{setAtualizar(!atualizar)}} />
                </div>
                <div className="col-3">
                    <Carrinho atualizar={atualizar} />
                </div>
            </div>
        </div>
    )
}