import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../common/Footer.js";
import { useParams } from "react-router";
import { Image, Button } from "semantic-ui-react";

const Watch = () => {
  let { id } = useParams();
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=70ff3f0b91ef9042cccf0562ca7af840`
      )
      .then((res) => {
        setTiles(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <br />

      <div style={{ margin: "0 10px 10px 10px" }}>
        <Image
          style={{
            float: "left",
            height: "400px",
            width: "250px",
            margin: "10px 35px 10px 10px",
          }}
          src={"https://image.tmdb.org/t/p/w500" + tiles.poster_path}
        />
        <h1 style={{ fontSize: "40px", color: "green" }}>{tiles.title}</h1>
        <Button
          content={tiles.vote_average}
          icon="heart"
          labelPosition="right"
          color="red"
          inverted
        />
        <h4 style={{ float: "right" }}>{tiles.overview}</h4>
        <h3>Movie Details</h3>
        <h4>Original Language: {tiles.original_language}</h4>
        <h4>Runtime: {tiles.runtime} m</h4>
        <h4>Revenue : {tiles.revenue}</h4>

        <iframe
          width="640"
          height="360"
          src="/sample-mp4-file.mp4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Watch;
