import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './cnavbar.css';

export default class Navbar2 extends Component {
  constructor() {
     super();
     this.state = {
        text : 'AW',

      }
   }


   //set the text
   onMouseover (e) {
     this.setState({text : 'Aaron Waguespack'})
   }
   //clear the text
   onMouseout (e) {setTimeout(() => {this.setState({text : 'AW'})}, 450)
   }


  render() {
    const {text} = this.state;
    return (
      <Navbar fixed="top"  expand="lg" default collapseOnSelect
      className="navclass"
      onScroll = {this.props.handleScroll()}
      style={{ background: `${this.props.backgroundColor}`}}
      >
      <Navbar.Brand href="/"
          onMouseEnter={this.onMouseover.bind(this)}
          onMouseLeave={this.onMouseout.bind(this)}
          style={{ color: `${this.props.color}`}}
          >{text}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav >
         <Link id="home" className="navpad mr-auto"  href="/" to="/"
            onClick= {event => this.props.handleClick(event, event.target.id)}>
            Home
          </Link>
          <Link id= "about" className="navpad mr-auto"  href="/about" to="/about"
          onClick= {event => this.props.handleClick(event, event.target.id)}>
            About
          </Link>
          <Link id= "projects" className="navpad mr-auto"  href="/news" to="/projects"
          onClick= {event => this.props.handleClick(event, event.target.id)}>
            Projects
          </Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}