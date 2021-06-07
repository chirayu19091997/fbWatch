import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { 
  Menu,
  Input } from 'semantic-ui-react';
import './Home.css';
import MovieTiles from '../home/MovieTiles';

export default class Home extends Component {
  state = { activeItem: 'home',search:'' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleItemChange = (e) => this.setState({search: e.target.value})

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
            <Menu.Item>
              <Input
                // transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search Movie...'
                className="search-style"
                onChange={this.handleItemChange}
              />    
            </Menu.Item>
          </Menu.Menu>
          <Link to="/login">
            <Menu.Menu position='right'>
              <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Link>
        </Menu>
        <MovieTiles search={this.state.search}></MovieTiles>
      </div>
    )
  }
}