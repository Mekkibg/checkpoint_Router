import React from 'react'
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';




const Filter = ({ searchMovie}) => {
 
  return (
    <>
     <Navbar expand="lg" style={{  background: '#1d077a'}}>
        <Container fluid>
         
         
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

          <Link to ='/' style={{textDecoration:'none', color:'black' ,fontSize:'24px',marginLeft:'20px' }}>Home</Link>
          <Link to ='add' style={{textDecoration:'none', color:'black' ,fontSize:'24px',marginLeft:'20px'}}>AddMovie</Link>
       
          </Nav>
           
            <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search "
                onChange={searchMovie}
              />
            </Form>
            </Navbar.Collapse>
           </Container>
        
      </Navbar>
         </>
  )
}

export default Filter;