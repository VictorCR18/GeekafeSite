import React, { useState } from 'react';
import cf from "../midia/cf.jpg"
import cro from "../midia/cro.jpg"
import './style.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Conteudo(props) {

  const {
    Comprar = 'Comprar',
    className
  } = props;

  const [valor, setValor] = useState(4);
  const [quantidade, setQuantidade] = useState(1);

  function ContadorPlus() {
    setValor(valor + 4);
    setQuantidade(quantidade + 1);
    if (valor <= 4) {
      document.getElementById("btD").disabled = false;
    }
  }
  function ContadorM() {

    if (valor < 5) {
      document.getElementById("btD").disabled = true;
    } setValor(valor - 4);
    setQuantidade(quantidade - 1);
  }

  function ContadorPlusD() {
    setValor(valor + 5);
    setQuantidade(quantidade + 1);
    if (valor <= 4) {
      document.getElementById("btD").disabled = false;
    }
  }
  function ContadorMD() {

    if (valor === 5) {
      document.getElementById("btD").disabled = true;
    } setValor(valor - 5);
    setQuantidade(quantidade - 1);
  }

  const [modal, setModal] = useState(false);
  const [modalD, setModalD] = useState(false);

  function ModalIncial() {
    setModal(!modal);
    setValor(4)
    setQuantidade(1)
  }
  function ModalIncialD() {
    setModalD(!modalD);
    setValor(5)
    setQuantidade(1)
  }


  return (

    <div id="ConteudoP">
      <Modal isOpen={modal} fade={false} toggle={() => ModalIncial()} className={className}>
        <ModalHeader toggle={() => ModalIncial()}>Café Daora</ModalHeader>
        <ModalBody>
          <div class="cardM">
            <div class="midia">
              <img class="img" alt="img.jpg" src={cf} />
            </div>
            <div class="conj">
              <div class="infor">
                <span class="prod">Valor Total:</span>
                <h2 class="preco">R$ {valor},00</h2>
              </div>
              <div class="action">
                <div class="qtd"><span>Quantidade: {quantidade} </span></div>
                <div class="btds">
                  <Button class="bt" id="btE" color="success" onClick={() => ContadorPlus()} >+</Button>
                  <Button class="bt" id="btD" color="success" onClick={() => ContadorM()} >-</Button>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => ModalIncial()}>Confirmar</Button>
          <Button color="secondary" onClick={() => ModalIncial()}>Cancelar</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalD} fade={false} toggle={() => ModalIncialD()()} className={className}>
        <ModalHeader toggle={() => ModalIncialD()}>Café Daora</ModalHeader>
        <ModalBody>
          <div class="cardM">
            <div class="midia">
              <img class="img" alt="img.jpg" src={cro} />
            </div>
            <div class="conj">
              <div class="infor">
                <span class="prod">Valor Total:</span>
                <h2 class="preco">R$ {valor},00</h2>
              </div>
              <div class="action">
                <div class="qtd"><span>Quantidade: {quantidade} </span></div>
                <div class="btds">
                  <Button class="bt" id="btE" color="success" onClick={() => ContadorPlusD()} >+</Button>
                  <Button class="bt" id="btD" color="success" onClick={() => ContadorMD()} >-</Button>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => ModalIncialD()}>Confirmar</Button>
          <Button color="secondary" onClick={() => ModalIncialD()}>Cancelar</Button>
        </ModalFooter>
      </Modal>


      <div class="boxall">
        <div class="card">
          <div class="midia">
            <img class="img" alt="img.jpg" src={cf} />
          </div>
          <div class="conj">
            <div class="infor">
              <span class="prod">Café daora</span>
              <h2 class="preco">R$ 4,00</h2>
            </div>
            <div class="action"><Button color="success" onClick={() => ModalIncial()}> {Comprar} </Button></div>
          </div>
        </div>
        <div class="card">
          <div class="midia">
            <img class="img" alt="img.jpg" src={cro} />
          </div>
          <div class="conj">
            <div class="infor">
              <span class="prod">Croissant daora</span>
              <h2 class="preco">R$ 5,00</h2>
            </div>
            <div class="action"><Button color="success" onClick={() => ModalIncialD()} >{Comprar}</Button></div>
          </div>
        </div>
        <div class="card">
          <div class="midia">
            <img class="img" alt="img.jpg" src={cf} />
          </div>
          <div class="conj">
            <div class="infor">
              <span class="prod">Café daora</span>
              <h2 class="preco">R$ 4,00</h2>
            </div>
            <div class="action"><Button color="success" onClick={() => ModalIncial()} >{Comprar}</Button></div>
          </div>
        </div>
        <div class="card">
          <div class="midia">
            <img class="img" alt="img.jpg" src={cf} />
          </div>
          <div class="conj">
            <div class="infor">
              <span class="prod">Café daora</span>
              <h2 class="preco">R$ 4,00</h2>
            </div>
            <div class="action"><Button color="success" onClick={() => ModalIncial()} >{Comprar}</Button></div>
          </div>
        </div>
        <div class="card">
          <div class="midia">
            <img class="img" alt="img.jpg" src={cf} />
          </div>
          <div class="conj">
            <div class="infor">
              <span class="prod">Café daora</span>
              <h2 class="preco">R$ 4,00</h2>
            </div>
            <div class="action"><Button color="success" onClick={() => ModalIncial()} >{Comprar}</Button></div>
          </div>
        </div>   <div class="card">
          <div class="midia">
            <img class="img" alt="img.jpg" src={cf} />
          </div>
          <div class="conj">
            <div class="infor">
              <span class="prod">Café daora</span>
              <h2 class="preco">R$ 4,00</h2>
            </div>
            <div class="action"><Button color="success" onClick={() => ModalIncial()} >{Comprar}</Button></div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Conteudo;