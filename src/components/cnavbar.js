import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './cnavbar.css';

export default class Navbar2 extends Component {
  constructor() {
     super();
     this.state = {
        text : 'AW',
        backgroundColor: 'rgba(120,0,0,.3)',
        color: 'black'
      }
   }

   componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        // console.log(maxScroll)
        if (currentScrollPos > 0) {
          this.setState({ backgroundColor: "rgba(44, 25, 25)" },);
          this.setState({ color: "white" },)
          // console.log(currentScrollPos)
        } else {
          this.setState({ backgroundColor: "rgba(120,0,0,.3)" });
          this.setState({ color: "black" },)
        }
      }
    }
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
      <Navbar fixed="top"  expand="lg" default collapseOnSelect
      className="navclass"
       style={{ background: `${this.state.backgroundColor}`}}
      >
      <Navbar.Brand href="/"
          onMouseEnter={this.onMouseover.bind(this)}
          onMouseLeave={this.onMouseout.bind(this)}
          style={{ color: `${this.state.color}`}}
          >{text}</Navbar.Brand>
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