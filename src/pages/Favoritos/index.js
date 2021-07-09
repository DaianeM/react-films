import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Errofavoritos from '../../components/ErroFavoritos';

import './favoritos.css';

export default function Favoritos(){
    const[filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const meusfavoritos = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(meusfavoritos) || [];

        setFilmes(filmesSalvos)

    },[])

    function handleDelete(id){
        let filtroFilmes = filmes.filter((filme)=>{
            return(filme.id !== id);
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.success('Favorito excluído com sucesso!')

    }

    return(
        <div className="meus-filmes">
            <h1>Meus Favoritos</h1>

            {filmes.length === 0 && 
                <Errofavoritos/>
            }
            
            <ul>
                {filmes.map((filme)=>{
                    return(
                        <li key={filme.id}>
                            <span>{filme.nome}</span>
                            
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhe do filme</Link>
                                <button onClick={()=>handleDelete(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    );
                })} 
            </ul>
        </div>
    );
}