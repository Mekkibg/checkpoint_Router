import React, { useState } from 'react'
import{useNavigate} from 'react-router-dom'
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*AddMovie function get handelAdd as props from App.js */ 
const AddMovie = ({ handelAdd }) => {

  const navigate = useNavigate();
  /*initialise the props the empty strings  */ 
  const [titles, setTitles] = useState("");
  const [posters, setPosters] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");
  const [trailer, setTrailer] = useState("");
    
    const AddNewMovie = () => {
        handelAdd({
          
            id: Math.random(),
            title: titles,
            rating: rate,
            image: posters,
            Description: description , 
            link:trailer,
        });
  };
  /*function toggle used to hide AddMovie component */
  const [toggle, setToggle] = useState(false);
  const handelToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around',marginTop:'50px' }}>
       
        <Button variant="outline-warning" onClick={()=>handelToggle() }>New Movie</Button>
      </div>
      {toggle && (<div style={{display:'flex', flexDirection:'column',marginLeft:'40%', marginTop:'50px',width:'300px' }}>
    
              
    < input
        type="text"
        placeholder="Add your movie title"
        onChange={(e) => setTitles(e.target.value)}
        /><br></br>
    < input
        type="text"
        placeholder="Add the movie picture URL"
        onChange={(e) => setPosters(e.target.value)}
        /><br></br>
        < input
        type="text"
        placeholder="Add the Rating "
        onChange={(e) => setRate(e.target.value)}
        /><br></br>
        < input
        type="text"
        placeholder=" Description of the movie "
        onChange={(e) => setDescription(e.target.value)}
        />
        <br></br>
        < input
        type="text"
        placeholder=" Trailer Url of the movie "
        onChange={(e) => setTrailer(e.target.value)}
        />
        <br></br>
        
        
      
        {/* AddNewMovie() function callback*/}
        <Button onClick={() => AddNewMovie()} variant="outline-warning" >Add</Button><br></br>
        {/*
        Link to home page*/}
        <Button onClick={()=>navigate('/')}   variant="outline-warning" > Home Page</Button>
     
      </div>)}
      
      
      
      </>  
      )
}

export default AddMovie;