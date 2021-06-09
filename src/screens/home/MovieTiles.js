import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Icon, Image } from "semantic-ui-react";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import "./Home.css";
import moviesData from "../../moviesData.js";
import Footer from "../common/Footer.js";
import GenreFilters from "../common/GenreFilters.js";

const MovieTiles = (props) => {
  const [genActive, setgenActive] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const clickHandler = (event) => {
    event.preventDefault();
    setgenActive(!genActive);
  };

  return (
    <div id="cards">
      <Button style={{margin:'5px 15px 15px 0',position:'fixed',right:0}} onClick={clickHandler}> Filters </Button>
      {genActive && (<div><br/><br/><GenreFilters/></div>) }

      <br/><br/><br/>
      <Card.Group>
        {moviesData
          .filter((movie) =>
            movie.title.toLowerCase().includes(props.search.toLowerCase() || "")
          )
          .map((movie) => (
            <Card centered color="red">
              <Image src={movie.poster} wrapped ui={false} />

              <Card.Content>
                <Card.Header>{movie.title}</Card.Header>
                <Card.Meta>
                  <span className="date">Id: {movie.id}</span>
                </Card.Meta>
                <Card.Description>
                  {movie.overview.slice(0, 100)}...
                </Card.Description>
              </Card.Content>

              <Card.Content
                extra
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <a>
                  <Icon name="download" />
                  Download
                </a>
                <Link to={`/watch/${movie.id}`}>
                  <Icon name="film" />
                  Watch
                </Link>
              </Card.Content>
            </Card>
          ))}
      </Card.Group>

      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Fab variant="extended" onClick={scrollToTop}>
          <NavigationIcon />
          Back to Top
        </Fab>
      </div>

      <Footer />
    </div>
  );
};

export default MovieTiles;
