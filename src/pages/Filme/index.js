import React, {useState, useEffect} from 'react';
import { useParams, useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import './filme.css';

export default function Filme(){
    const { id } = useParams();
    const history = useHistory();

    const[filme, setFilme] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            //Tentou acessar um ID que não existe, navego ele para a home
            if(response.data.length === 0){
                history.replace('/')
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();
    }, [history, id])

    function salvaFavorito(){
        const meusFavoritos = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(meusFavoritos) || [];

        //SE TIVER ALGUM FILME SALVO COM ESSE MESMO ID PRECISA IGNORAR
        const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id);

        if(hasFilme){
            toast.info('Você já favoritou este filme');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!');
        
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando...</h1>
            </div>
        );
        
    }
    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>
            <h3>Sinopse:</h3>
            <p>{filme.sinopse}</p>

            <div>
                <button onClick={ salvaFavorito }>Favoritar</button>
                <button>
                    <a  target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome}+trailler`}>
                        Trailler
                    </a>
                </button>
            </div>
        </div>
    );
}
