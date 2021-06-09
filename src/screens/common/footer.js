import React from "react";
import { Link } from "react-router-dom";
import { List, Grid, Container, Segment, Header } from "semantic-ui-react";

function Footer() {
  return (
    <div>
      <br></br>
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Team</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={3}>
                <Header inverted as="h4" content="More" />
                <List link inverted>
                  <List.Item as="a">Request</List.Item>
                  <List.Item as="a">Report Inappropriate</List.Item>
                  <List.Item as="a">Report Bugs</List.Item>
                  <List.Item as="a">Ticket Status</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={3}>
                <Header inverted as="h4" content="Social & Sources" />
                <List link inverted>
                  <List.Item as="a">Telegram</List.Item>
                  <List.Item as="a">Instagram</List.Item>
                  <List.Item as="a">Twitter</List.Item>
                  <List.Item as="a">Github</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Wonder Why?
                </Header>
                <p>
                  This is completely a non profitable and opensource project
                  just for Users to Get their One Stop Entertainment. If you
                  like our work you can support us buy a Coffee!
                </p>
                <Link to="/donate">
                  <List link inverted>
                    <List.Item as="a">Support Us!</List.Item>
                  </List>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
