import React from 'react'
import {Card , Button} from 'react-bootstrap'
import ReactStars from "react-stars";
const MovieCard = ({movie}) => {

  return (
    <div style={{margin:"15px"}}>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.url} style={{height:"350px"}}/>
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <div style={{marginLeft :"60px"}}>
          <ReactStars
           size={ 30}
           value= {movie.rate} 
           edit= {false}
           />
           </div>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard