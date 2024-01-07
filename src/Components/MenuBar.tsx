import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <i className="fa-solid fa-bars"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton className='border-bottom'>
          <Offcanvas.Title>Admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='text-center'>
          <Link className='text-decoration-none text-dark' to={''}>
            <h5 className='py-1 '>Registration</h5>
          </Link>
          <hr />
          <Link className='text-decoration-none text-dark' to={''}>
            <h5 className='py-1'>View Registrations</h5>
          </Link>
          <hr />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;