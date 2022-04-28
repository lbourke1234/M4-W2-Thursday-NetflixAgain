import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"


import {
  Nav,
  Navbar,
  Dropdown,
} from "react-bootstrap";

class HeadingNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-expand-lg navbar-dark dark-netflix d-flex">
          <Navbar.Brand href="#home" className="nav-link heading ml-2">
            <h2>TV Shows</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "black",
                  border: "1px solid white",
                }}
                id="dropdown-basic-button"
                className="p-1"
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Nav>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link mx-3" href="#hello">
                  <i class="bi bi-filter-square-fill"></i>
                  <i class="bi bi-dice-4"></i>
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeadingNavbar;


            
