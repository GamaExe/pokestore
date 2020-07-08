import React, {useState, useEffect} from 'react';
import {FiX} from 'react-icons/fi';
import './Carrinho.css'

export default function Carrinho(props){

    const [carrinho, setCarrinho] = useState([]);
    const [total, setTotal] = useState("0");
    const [atualizar, setAtualizar] = useState(false);

    useEffect(()=>{    
        let arr = [];

        if(localStorage.getItem('itens')){
            arr = JSON.parse(localStorage.getItem('itens'));
        }
        
        let precoTotal = 0;
        let carrinhoList = arr.map((item, index)=>{
            precoTotal += item.preco;
            return {
                id: item.id,
                nome: item.nome,
                url: item.url,
                preco: parseFloat(item.preco),
            }
        })

        setCarrinho(carrinhoList);
        setTotal(precoTotal);
        
    }, [atualizar, props.atualizar])

    function removerItem(id){
        try{
            let arr = [];

            if(localStorage.getItem('itens')){
                arr = JSON.parse(localStorage.getItem('itens'));
            }
            for(let i = 0; i < arr.length; i++){
                if(arr[i].id === id){
                    arr.splice(i,1);
                    break;
                }
            }
            
            localStorage.setItem('itens', JSON.stringify(arr));

            setAtualizar(!atualizar)

        }catch(erro){
            alert(`Erro ao deletar item: ${erro}`)
        }
    }

    async function finalizarCompra(){
        alert("Compras efetuada com sucesso!")
        localStorage.clear();
        setAtualizar(!atualizar);
    }

    return(
        <div className='card carrinho'>
            <img className="card-img-top" src="..." alt=""/>
            <div className="card-body">
                <h5 className="card-title title">Carrinho</h5>
                <ul className="lista">   
                    {carrinho.map((item, index)=>(         
                        <li key={item.id} className="list-group-item item">
                            <div className="item-content">
                                <img
                                    className="item-img bg-dark"
                                    src ={item.url}
                                    //src ='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEM62GIsUKT4LcPrClrd_sY9dWvSLyQjmHqQ&usqp=CAU'
                                    alt=''
                                />
                                <p className="carrinho-title">{item.nome}</p>
                            </div>
                            <div>R$: {item.preco},00</div>
                            <button className="remover_item" onClick={()=>{removerItem(item.id)}}>
                                <FiX/>
                            </button>
                        </li>
                    ))} 
                </ul> 
            </div>
            <div className="card-body">
                <div className="total"><strong>Total:</strong><div>R$:{total},00</div></div>
                <button onClick={()=> finalizarCompra()} className="btn btn-primary btn-lg btn-block">Finalizar</button>
            </div>
        </div>
    )
}