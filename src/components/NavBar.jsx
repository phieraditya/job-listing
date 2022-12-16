import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <span className="fw-bolder">GitHub</span> Jobs
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar
