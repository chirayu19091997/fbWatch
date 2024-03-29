import React from "react";
import { List, Grid, Container, Segment, Header as Heading } from "semantic-ui-react";

const GenreFilters = () => {
  return (
    <div>
      <br></br>
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Heading inverted as="h4" content="" />
                <List link inverted>
                  <List.Item as="a">Science Fiction</List.Item>
                  <List.Item as="a">Adventure</List.Item>
                  <List.Item as="a">Family</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={3}>
                <Heading inverted as="h4" content="" />
                <List link inverted>
                  <List.Item as="a">Fantasy</List.Item>
                  <List.Item as="a">Documentary</List.Item>
                  <List.Item as="a">Animation</List.Item>
                  <List.Item as="a">Thriller</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={3}>
                <Heading inverted as="h4" content="" />
                <List link inverted>
                  <List.Item as="a">Action</List.Item>
                  <List.Item as="a">Horror</List.Item>
                  <List.Item as="a">Comedy</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={7}>
                <Heading as="h4" inverted>
                  Genres
                </Heading>
                <p>Select Type of Movie you Want to Watch.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default GenreFilters;
