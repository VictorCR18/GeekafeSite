import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Cabecalho = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Cabecalho">

      <Navbar id="barra" color="dark" dark expand="md" >
        <NavbarBrand id="logo" size="lg" href="/">Geekafé</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem id="produtos">
              <NavLink href="/produtos">Produtos</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id="servicos" nav caret>
                Serviços
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Encomendas
                </DropdownItem>
                <DropdownItem>
                  Chá
                </DropdownItem>
                <DropdownItem>
                  Livros
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Cabecalho;