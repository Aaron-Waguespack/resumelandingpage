import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './about.css';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Image src="assets/aboutc.jpg" className="header-image-about" />
        <Container className='container-about'>
          <h2>Who am I</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p> I am originally from New Orleans an moved here from South Florida</p>
              <p> I love snowboarding but do not get up to the mountains enough.</p>
              <p> I have hiked 5 14'ers.</p>
              <p> I miss the Florida beaches. </p> 
              <p> I love music and concerts. </p>
              <p> I love building things whether on the computer or with my hands.</p>
              <p> I love challenging myself to learn new things.</p> 


            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/waguespackc.jpg" />
              <p><span></span>I recently married to an amazing woman who challenges me to be a better person every day. I am also a new dad to a beautiful seven year old that makes me laugh harder than anyone else in my life. </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}