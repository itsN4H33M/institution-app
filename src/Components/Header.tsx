import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';
function BasicExample() {

  const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <Navbar expand="lg" className="shadow" style={{ backgroundColor: '#A0D2EB' }}>
        <Container fluid>
          <MenuBar />
          <Navbar.Brand className='ms-3'>
            <Link to={'/'} className="text-decoration-none text-dark fw-bolder">
              <i className="fa-solid fa-user-graduate me-2"></i>Trace
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >Courses</Nav.Link>
              <Nav.Link className='me-2'>Log In</Nav.Link>
              <div className='btn' onClick={() => setShowProfile(!showProfile)}>
                <img height={'30px'} width={'30px'} src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" className='rounded-circle' />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ul className={`list-group position-absolute top-10 end-0 me-4 z-3 ${showProfile ? "" : 'd-none'}`}>
        <li className="list-group-item">tom</li>
        <li className="list-group-item">tom@x.com</li>
        <li className="list-group-item">
          <button className='btn btn-outline-primary '>Log Out</button>
        </li>
      </ul>
    </>

  );
}

export default BasicExample;