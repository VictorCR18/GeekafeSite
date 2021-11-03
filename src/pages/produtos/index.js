import React from 'react';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Rodape from './Rodape';

import store from './Count';

function Produtos() {
    return (
        <div>
            <Cabecalho />
            <Conteudo/>
            <Rodape store = {store} />
        </div>
    )
}

export default Produtos;



