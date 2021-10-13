import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  return (
    <div>
      <Navbar bg='dark' expand='lg' variant='dark'>
        <Navbar.Brand href='#' className='mx-2'>
          Navbar scroll
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto' navbarScroll>
            <LinkContainer to='/'>
              <Nav.Link href='#action1'>Home</Nav.Link>
            </LinkContainer>
            <Nav.Link href='#action2'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
