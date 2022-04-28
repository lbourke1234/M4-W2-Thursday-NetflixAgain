import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Dropdown, Nav, Form } from 'react-bootstrap'
import netflix from '../Images/netflix_logo.png'
import dropdown from '../Images/dropdown.png'
import { Link } from 'react-router-dom'

class MyNav extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-expand-lg navbar-dark dark-netflix d-flex">
          <a className="navbar-brand" href="#hello">
            <img src={netflix} alt="netflix-logo" width="145" height="60" />
          </a>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">
                <div className="nav-link" href="#home">
                  Home
                </div>
              </Link>
              <Link to="/tv-shows">
                <div className="nav-link" href="#shows">
                  TV Shows
                </div>
              </Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#recent">Recently Added</Nav.Link>
              <Nav.Link href="#list">My List</Nav.Link>
            </Nav>

            <Form.Control
              style={{ width: '250px' }}
              type="text"
              placeholder="Search here"
              onChange={(e) => this.props.setSearchValue(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#comedy">
                  <i class="bi bi-search"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kids">
                  KIDS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hello">
                  <i className="bi bi-bell"></i>
                </a>
              </li>
            </ul>

            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: 'black',
                  border: 'none'
                }}
                id="dropdown-basic"
                className="p-0"
              >
                <img src={dropdown} alt="netflix-logo" width="25" height="25" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MyNav
