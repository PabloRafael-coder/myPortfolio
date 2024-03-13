import React from 'react';

import { Container, Header, Navbar } from './styled';

function Home() {
  return (
    <Container>
      <Header>
        <p>Item renderizado</p>

        <p>Item renderizado</p>
        <Navbar>
          <p>Home</p>
          <p>Sobre</p>
          <p>Projetos</p>
          <p>Login</p>
        </Navbar>
      </Header>
      
    </Container>
  );
}

export default Home;
