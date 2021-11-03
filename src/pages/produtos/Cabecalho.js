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
import './style.css';

const Cabecalho = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Cabecalho">

      <Navbar color="dark" dark expand="md" >
        <NavbarBrand id="logo" size="lg" href="/">Geekafé</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/login">Conecte-se</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/produtos">Produtos</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
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