import React from 'react';

import { Container, Header, Navbar, ListOR } from './styled';

function Home() {
  return (
    <Container>
      <Header>
        <p>Item renderizado</p>
        <p>Item renderizado</p>
        <Navbar>
            <ListOR>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/contato">Contato</a></li>
            </ListOR>
        </Navbar>
      </Header>
      
    </Container>
  );
}

export default Home;
