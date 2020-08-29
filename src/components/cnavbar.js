import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './cnavbar.css';

export default class Navbar2 extends Component {
  constructor() {
     super();
     this.state = { text : 'AW'}
   }
   //set the text
   onMouseover (e) {
     this.setState({text : 'Aaron Waguespack'})
   }
   //clear the text
   onMouseout (e) {setTimeout(() => {this.setState({text : 'AW'})}, 750)
   }


  render() {
    const {text} = this.state;
    return (
      <Navbar fixed="top"  expand="lg" default collapseOnSelect >
      <Navbar.Brand href="/"
          onMouseEnter={this.onMouseover.bind(this)}
          onMouseLeave={this.onMouseout.bind(this)}>{text}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav >
         <Link className="navpad mr-auto" eventKey={1} href="/" to="/">
            Home
          </Link>
          <Link className="navpad mr-auto" eventKey={2} href="/about" to="/about">
            About
          </Link>
          <Link className="navpad mr-auto" eventKey={3} href="/news" to="/projects">
            Projects
          </Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}