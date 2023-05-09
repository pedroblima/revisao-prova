import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Animes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="../animes">Anime</Nav.Link>
            <Nav.Link href="../animes/generos">Gêneros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho