import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle} from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import{useNavigate} from 'react-router-dom'

const Trailer = ({ movies }) => {

  const { IDMovie } = useParams();
  const navigate = useNavigate(); 
  const movieTrailer = movies.find((e) => e.id === Number(IDMovie));
  
  return (
      
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>

    <div style={{ marginTop: "200px", width: "400px", color: 'black' }}>
        
    <h1>{movieTrailer.title }</h1>
    <div >{movieTrailer.Description}</div>
    </div>   
    <div style={{marginTop:'90px'}}>
    <iframe  width="625" height="444"  src={movieTrailer.link} title="YouTube video player" frameborder="0" allowFullScreen>
        
    </iframe>
      
    </div>
    <div style={{marginTop:'35px' }}>
    <button style={{border:'transparent',background:'transparent' ,color:'white'}} onClick={() => navigate('/')}>Close  <FontAwesomeIcon icon={faXmarkCircle} /></button>
    </div> 
    </div>
    
  )
}

export default Trailer;