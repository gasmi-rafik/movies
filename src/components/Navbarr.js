import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactStars from  "react-stars";
function Navbarr({setName ,setSearchRate}) {
  const ratingChanged = (newRating) => {
  setSearchRate(newRating)
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <ReactStars
          size={ 30}
          onChange ={ratingChanged}
          edit= {true}
          half={false}
           />
          <Form className="d-flex">
          
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setName(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbarr;