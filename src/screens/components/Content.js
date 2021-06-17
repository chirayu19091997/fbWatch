import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Button, Icon, Image } from "semantic-ui-react";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Footer from "../common/Footer";
import GenreFilters from "../common/GenreFilters";

const Content = (props) => {
    // Filters Section
    const search = props.search;
    const [tiles, setTiles] = useState([]);
    const [genActive, setgenActive] = useState(false);
    const [loading, setloading] = useState(false);
  
    const clickHandler = (event) => {
      event.preventDefault();
      setgenActive(!genActive);
    };
  
    useEffect(() => {
      if (search !== "") {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=70ff3f0b91ef9042cccf0562ca7af840&query=${search}`
          )
          .then(async (res) => {
            setloading(true);
            const data = await res.data.results;
            setTiles(data);
            setloading(false);
          })
          .catch((err) => console.log(err));
      } else {
        axios
          .get(
            `https://api.themoviedb.org/3/trending/all/week?api_key=70ff3f0b91ef9042cccf0562ca7af840`
          )
          .then((res) => {
            setTiles(res.data.results);
          })
          .catch((err) => console.log(err));
      }
    }, [search]);
  
    // Scroll To Top Section
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
    <>
          <div id="cards">
      {/* Filters UI Section */}

      <Button
        style={{ margin: "5px 15px 15px 0", position: "absolute", right: 0 }}
        onClick={clickHandler}
      >
        {" "}
        Filters{" "}
      </Button>
      {genActive && (
        <div>
          <br />
          <br />
          <GenreFilters />
        </div>
      )}

      {/* Cards UI section */}

      <br />
      <br />
      <br />
      {!loading ? (
        <Card.Group>
          {tiles
            .filter((movie) => movie.media_type !== props.notType)
            .map((movie) => (
              <Card centered color="red">
                <Image
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  wrapped
                  ui={false}
                />

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
      ) : (
        <h1>....loading.....</h1>
      )}

      {/* Back To Top UI section */}

      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Fab variant="extended" onClick={scrollToTop}>
          <NavigationIcon />
          Back to Top
        </Fab>
      </div>

      {/* Footer Section */}

      <Footer />
    </div>
    </>
  )
}

export default Content;
