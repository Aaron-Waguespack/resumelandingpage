import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Image src="assets/old14c.jpg" className="header-image-home" />
        <Container className="container-home">
          <Col  lg={12}>
            <Image src="assets/profile01.jpg" className="home-profile-pic" roundedCircle />
            <h1 className='title'>Aaron Waguespack</h1>
            <h4 className='title'>Financial Analyst / Project Manager / </h4>
            <h4 className='title'>Web Developer</h4>
            <p> Skilled finance professional with 14 years of experience in industry leading technology,
                telecom, service and agriculture related companies. Entire business cycle modeling
                experience from: long range planning, annual operating plans to monthly forecasts
                and closings. Primary focus in financial, forecast, budget and income summary modeling
                as well as ERP system management and data management.</p>
            <Container>
            <h4> Aptitudes include: </h4>
            <p className="bulletpoint">● Capital and OPEX budgeting and modeling </p>
            <p className="bulletpoint">● Predictive financial modeling and Metric tracking</p>
            <p className="bulletpoint">● Financial statement analysis</p>
            <p className="bulletpoint">● Month End Closings </p>
            <p className="bulletpoint">● Headcount and Commission Management</p>
            <p className="bulletpoint">● Executive-level Quarterly & Year End presentation skills</p>
            <p className="bulletpoint">● Capital and OPEX budgeting and modeling </p>
            <h4>Technical Skills: </h4>
            <p className="bulletpoint">Microsoft Office, Advanced Excel, Adaptive, GP, Office Connect, MDS,
                 Essbase, Hyperion, Oracle, SAP, Adaptive, Management Reporter, internal ERP financial systems,
                 Salesforce.com, HTML5, CSS3, Bootstrap 3-4, Javascript, NPM, Node.js, SQL, MySQL, PostgresSQL,
                 Express.js, MongoDB, Heroku, REST, GIT, GitHub</p>
            <a className="gitlink" href="https://github.com/Aaron-Waguespack/">--- GitHub Link ---</a> 
            <h3>Contact me at: Aaron_Waguespack@hotmail.com</h3>
            </Container>
          </Col>
        </Container>
      </div>
    )
  }
}