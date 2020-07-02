import React from 'react';
import Catalogo from '../catalogo/Catalogo';
import './Carrinho.css'

export default function Carrinho(){
    return(
        <>
        <div className="row">
            <div className="col-8">
                <Catalogo />
            </div>
            
            <div className='card col-3 carrinho'>
                <img className="card-img-top" src="..." alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Carrinho</h5>
                    <ul className="lista">             
                        <li className="list-group-item item">
                            <div className="item-content">
                                <img
                                    className="item-img"
                                    src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEM62GIsUKT4LcPrClrd_sY9dWvSLyQjmHqQ&usqp=CAU'
                                    alt=''
                                />
                                <p>Skerte</p>
                            </div>
                            <div>R$: 500,00</div>
                        </li>
                        <li className="list-group-item item">
                            <div className="item-content">
                                <img
                                    className="item-img"
                                    src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEM62GIsUKT4LcPrClrd_sY9dWvSLyQjmHqQ&usqp=CAU'
                                    alt=''
                                />
                                <p>Skerte</p>
                            </div>
                            <div>R$: 500,00</div>
                        </li>
                        <li className="list-group-item item">
                            <div className="item-content">
                                <img
                                    className="item-img"
                                    src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEM62GIsUKT4LcPrClrd_sY9dWvSLyQjmHqQ&usqp=CAU'
                                    alt=''
                                />
                                <p>Skerte</p>
                            </div>
                            <div>R$: 500,00</div>
                        </li>
                        <li className="list-group-item item">
                            <div className="item-content">
                                <img
                                    className="item-img"
                                    src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEM62GIsUKT4LcPrClrd_sY9dWvSLyQjmHqQ&usqp=CAU'
                                    alt=''
                                />
                                <p>Skerte</p>
                            </div>
                            <div>R$: 500,00</div>
                        </li>
                    </ul> 
                    
                </div>
                <div className="card-body">
                    <div className="total"><strong>Total:</strong><div>R$:1000,00</div></div>
                    <button className="btn btn-primary btn-lg btn-block">Finalizar</button>
                </div>
            </div>
        </div>
        </>
    )
}