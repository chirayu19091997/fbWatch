import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const Signup = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        {/* <Image src='/logo.png' />  */}
        Signup on fbWatch
      </Header>

      <Form size='large'>
        <Segment stacked>
          <Form.Input 
          fluid 
          Icon='user' 
          iconPosition='left' 
          placeholder='E-mail address' 
          />

          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Enter Password'
            type='password'
          />

          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Re-Enter Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Signup
          </Button>
          
        </Segment>
      </Form>

      <Message>
        Already Registered? <a href='#'>Login</a>
      </Message>

    </Grid.Column>
  </Grid>
)

export default Signup;