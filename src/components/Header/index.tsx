import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  path?: 'list' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  path,
}: HeaderProps) => (
  <Container size={size} path={path}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className="list" to="/">
          Listagem
          {path === 'list' && <hr color="#ff872c" />}
        </Link>
        <Link className="import" to="/import">
          Importar
          {path === 'import' && <hr color="#ff872c" />}
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
