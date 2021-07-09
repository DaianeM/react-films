import React from 'react';

import noMovie from '../../assets/no-movie.png';
import './erroFavoritos.css';

export default function Errofavoritos(){
    return(
        <div className="erro-favoritos">
            <h3>Oops.. Você não possui filmes favoritos</h3>
            <img className="logo-erro" src={noMovie} alt="Claquete de erro"/>
        </div>
    );
}