import React from 'react';


import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Conteudo() {
  return (
    <div id="principalA" >
      <div id="ConteudoV">
        <Form id="form">
          <FormGroup>
            <h2 id="title">Cadastro</h2>
            </FormGroup>
            <FormGroup>
            <Label>Nome</Label>
            <Input type="text"  placeholder="Digite seu nome aqui..." />
          </FormGroup>
          <FormGroup>
            <Label>Sobrenome</Label>
            <Input type="text"  id="exampleEmail" placeholder="Digite seu sobrenome aqui..." />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email"  placeholder="Digite seu email aqui..." />
          </FormGroup>  <FormGroup>
            <Label>Senha</Label>
            <Input type="password"   placeholder="Digite sua senha aqui..." />
          </FormGroup>
          <FormGroup>
            <Label>Confirmar senha</Label>
            <Input type="password"   placeholder="Confirme sua senha aqui..." />
          </FormGroup>
          <Button id="btn" color="light">Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default Conteudo;