import React from 'react';


import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Conteudo() {
  return (
    <div id="principal" >
      <div id="ConteudoL">
        <Form id="form">
          <FormGroup>
            <h2 id="title">Login</h2>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <Button id="btn" color="light">Submit</Button>
          <p id="paragrafo">Não possui cadastro? Cadastre-se<a href="cadastrar">  aqui!</a></p>
        </Form>
      </div>
    </div>
  )
}

export default Conteudo;