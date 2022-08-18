
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const AddMovie = ({setMovies , movies}) => {
    const [show, setShow] = useState(false);
    const [name , setName]=useState('')
    const [url, setUrl]=useState('')
    const [rate, setRate]=useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const handelSubmit=(e)=>{
    e.preventDefault()
    const newmovie = {name , url , rate, id : Math.random()}
    setMovies([...movies , newmovie])
    setName('')
    setUrl('')
    setRate("")
    handleClose()
    console.log(newmovie)

}
  
  return (
    <div>
          <Button variant="outline-success" onClick={handleShow} style={{borderRadius:"50%" , height:"80px" , width:"80px", marginBottom:"20px"}}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" valur={name} onChange={(e)=>setName(e.target.value)} />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Movie picture</Form.Label>
        <Form.Control type="text" placeholder="picture url movie" value={url}  onChange={(e)=>setUrl(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Rate</Form.Label>
        <Form.Control type="Number" placeholder="the rate of movie" value={rate} onChange={(e)=>setRate(e.target.value)} />
      </Form.Group>
      
     
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>handelSubmit(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie