import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './style.css';

 function Conteudo(){
     return (
     <div id="Conteudo">
         <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-2">Welcome to Geekafé!</h1>
          <p className="lead">"Apenas busquem conhecimeto" </p>
        </Container>
      </Jumbotron>
     </div>
     )
 }

 export default Conteudo;