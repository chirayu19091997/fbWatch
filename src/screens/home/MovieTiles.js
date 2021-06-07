import React,{ useState } from 'react';
import { Card,Button, List, Grid, Container, Segment, Header, Icon, Image} from 'semantic-ui-react';
import moviesData from '../../moviesData.js';
import { Link } from "react-router-dom";
import Footer from '../common/footer.js';
import GenreFilters from '../common/GenreFilters.js';


const MovieTiles = (props) => {
  const [genActive, setgenActive] = useState(false);

  // const handleChange =(event) => {
  //   event.preventDefault();
  //   setsearch(event.target.value);
  // }
  const clickHandler =(event) => {
      event.preventDefault();
      setgenActive(!genActive)
      
    }

  return(
    <div id="cards">
      <Button style={{margin:'5px 15px 15px 0',position:'fixed',right:0}} onClick={clickHandler}> Filters </Button>
      {genActive && (<div><br/><br/><GenreFilters/></div>) }
      <br/><br/><br/>

        {/* <div>
            <input type="text" placeholder="Search" value={search} onChange={handleChange} className="Header-Search"/>
        </div> */}
    <Card.Group>
    {
    moviesData
    // .filter((movie) => (movie.title.toLowerCase().includes(search.toLowerCase())))
    .filter((movie) => (movie.title.toLowerCase().includes(props.search.toLowerCase() || "")))
    .map((movie) => (
      // <Link to='/watch'>
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
    // </Link>
    ))}
    </Card.Group>
    <Footer/>
    {/* <br></br>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Team</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='More' />
              <List link inverted>
                <List.Item as='a'>Request</List.Item>
                <List.Item as='a'>Report Inappropriate</List.Item>
                <List.Item as='a'>Report Bugs</List.Item>
                <List.Item as='a'>Ticket Status</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Social & Sources' />
              <List link inverted>
                <List.Item as='a'>Telegram</List.Item>
                <List.Item as='a'>Instagram</List.Item>
                <List.Item as='a'>Twitter</List.Item>
                <List.Item as='a'>Github</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Wonder Why?
              </Header>
              <p>
                This is completely a non profitable and opensource project just for Users to Get their One Stop Entertainment.
                If you like our work support us buy a Coffee!
              </p>
              <Link to="/donate">
                <List link inverted>
                  <List.Item as='a'>Support Us!</List.Item>
                </List>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment> */}

    </div>
    )
}


export default MovieTiles;