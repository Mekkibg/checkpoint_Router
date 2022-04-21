import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import{useNavigate} from 'react-router-dom'
import '../style.css'


const MovieCard = ({ result, deleteHAndeler }) => {
      
      /* Delete movie Function by id (deleteHandler passed as props from App.js to MovieList to his child )*/ 
      const delteMovie = () => {

        deleteHAndeler(result.id);
      };

      let navigate = useNavigate();

      return (
        
      <div className="card" >
      <div className="card-image">
        
      <img src={result.image} alt="poster" width="250px"></img>
        
      </div>
                
      <div className="card-description">
      <h2> {result.title}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h3 style={{marginTop:'10px'}}> <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} /> {result.rating}/10</h3>
      </div>
           
      <div style={{display:'flex' , justifyContent:'space-between'}}>
          <Button variant="warning" onClick={() => delteMovie()}>Remove </Button>
          <Button variant="outline-dark" onClick={()=>navigate(`trailer/${result.id}`)}>Trailer</Button>
      </div>
            
      </div>
            
      </div>
  )
}

export default MovieCard;