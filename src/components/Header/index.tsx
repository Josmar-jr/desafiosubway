import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../IconsComponents/Logo";

import {
  Container,
  ListNav,
  Contacts,
  ContainerHeader,
  MenuHamburger,
  Dropdown,
} from "./styles";

export function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

export function DesktopHeader() {
  return (
    <Container>
      <div>
        <nav>
          <Logo width={210} height={87} />
          <ListNav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cardapio">Cardápio</Link>
            </li>
            <li>
              <Link to="/nutricao">Nutrição</Link>
            </li>
            <li>
              <Link to="/">História</Link>
            </li>
          </ListNav>
        </nav>
        <Contacts>
          <Link to="/contato">
            <button>Contato</button>
          </Link>
          <a href="/">Trabalhe conosco</a>
        </Contacts>
      </div>
    </Container>
  );
}

export function MobileHeader() {
  const [isActive, setIsActive] = useState(false);

  function handleDropdown() {
    setIsActive((c) => !c);
  }

  return (
    <>
      <ContainerHeader>
        <div>
          <Logo width={140} height={57} />
          <MenuHamburger
            onClick={handleDropdown}
            className={`${isActive && "activeBx"} `}
          />
        </div>
      </ContainerHeader>
      <Dropdown isActive={isActive}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cardapio">Cardápio</Link>
        </li>
        <li>
          <Link to="/nutricao">Nutrição</Link>
        </li>
        <li>
          <Link to="/">História</Link>
        </li>
        <li>
          <a href="/">Contato</a>
        </li>
      </Dropdown>
    </>
  );
}
