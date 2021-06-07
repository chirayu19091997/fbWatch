import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import { 
  Card,
  Button,
  Icon,
  Image} from 'semantic-ui-react';
import moviesData from '../../moviesData.js';
import Footer from '../common/footer.js';
import GenreFilters from '../common/GenreFilters.js';

const MovieTiles = (props) => {
  const [genActive, setgenActive] = useState(false);

  const clickHandler =(event) => {
      event.preventDefault();
      setgenActive(!genActive) 
    }

  return(
    <div id="cards">
      <Button style={{margin:'5px 15px 15px 0',position:'fixed',right:0}} onClick={clickHandler}> Filters </Button>
      {genActive && (<div><br/><br/><GenreFilters/></div>) }
      <br/><br/><br/>

    <Card.Group>
      {
      moviesData
      .filter((movie) => (movie.title.toLowerCase().includes(props.search.toLowerCase() || "")))
      .map((movie) => (
      <Card centered color="red">
        
        <Image src={movie.poster} wrapped ui={false} />
        
        <Card.Content>
          <Card.Header>{movie.title}</Card.Header>
          <Card.Meta>
            <span className='date'>Id: {movie.id}</span>
          </Card.Meta>
          <Card.Description>{movie.overview.slice(0,100)}...</Card.Description>
        </Card.Content>
        
        <Card.Content extra>
          <a>
            <Icon name='download' />
              Download
          </a>
          <Link to={`/watch/${movie.id}`}>
            <Icon name='download' />
              Watch
          </Link>
        </Card.Content>
      
      </Card>
      ))}
    </Card.Group>

    <Footer/>
    </div>
    )
}

export default MovieTiles;