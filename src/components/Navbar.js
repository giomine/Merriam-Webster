import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'

const PageNavbar = () => {
  return (
    <Navbar navbar-expand='lg'>  
      <Container>
        <Navbar.Brand to='/' as={Link}></Navbar.Brand>
        <Navbar.Collapse id='definitions-nav'>
          <Nav>
            <button className='one'>
              <Nav.Link to='/medical' as={Link}>Medical</Nav.Link>
            </button>
            <button className='two'>
              <Nav.Link to='/school' as={Link}>School</Nav.Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavbar