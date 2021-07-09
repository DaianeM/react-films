import React from 'react';

import erroImg from '../../assets/erro.png';

import './pageNotFound.css';

export default function PageNotFound(){
    return(
        <div className="page-erro">
            <img src={erroImg} alt="Robô informando página não encontrada"/>
            <h1>Oops.. Página não encontrada</h1>
        </div>
    );
}