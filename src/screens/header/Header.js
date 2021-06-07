import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Header.css';
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
        <Link to="/">
          <Menu.Item
            name='FB()watch'
            onClick={this.handleItemClick}
          />
          </Link>
        <Link to="/">
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          </Link>

          <Link to="/movies">
          <Menu.Item
            name='Movies'
            active={activeItem === 'Movies'}
            onClick={this.handleItemClick}
          />
          </Link>

          <Link to="/tv-shows">
          <Menu.Item
            name='Tv-shows'
            active={activeItem === 'Tv-shows'}
            onClick={this.handleItemClick}
          />
          </Link>

            <Menu.Menu position='right'>
              <Link to="/login">
              <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
              />          
              </Link>
            </Menu.Menu>


        </Menu>
      </div>
    )
  }
}