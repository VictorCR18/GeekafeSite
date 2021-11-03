import React from "react"
import Cabecalho from './Cabecalho'
import Conteudo from "./Conteudo";
import './style.css';

function Login(props) {
  return (
    <div>
      <Cabecalho />
      <Conteudo />
    </div>
  );
};

export default Login;