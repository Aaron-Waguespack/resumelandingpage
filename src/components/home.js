import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div class="container-fluid px-0">
        <div class = "row align-items-center">
        <div class="col-md-12">
        <Image src="assets/old14c.jpg" className="header-image-home" />
        </div>
        <Container className="container-home">
          <Col  lg={12}>
            <Image src="assets/profile01.jpg" className="home-profile-pic" roundedCircle />
            <h1 className='title'>Aaron Waguespack</h1>
            <h4 className='title'>- Software Engineer -</h4>
            <h5 className='title'>Financial Analyst / Project Manager </h5>

            <p> After +10 years as a financial analyst and a MBA I realised my passion
              was on the creation side of things and decided to change careers.
              Whether it was building budgeting modes or managing various ERP systems,
              I knew my future lay in software development. Over the past 2 years I have
              been developing those skills to pursue my dream of being a web developer. </p>
            <Container>
            <h4 className="summary" >Technical Skills - Web Development: </h4>
            <p className="bulletpoint"> <strong>Front-End:</strong> <p>JavaScript (ES5/ES6), ReactJS, React, jQuery, HTML, CSS, Bootstrap</p></p>
            <p className="bulletpoint"> <strong>Back-End:</strong><p> Amazon Web Services(AWS), Node.js, Express, MySQL, PostgreSql, MongoDB, Heroku, Redis, REST, Express.js</p></p>
            <p className="bulletpoint"> <strong>Testing:</strong> <p>Jest, Enzyme, Mocha, Chai</p></p>
            <p className="bulletpoint"> <strong>Additional Tools:</strong> <p>Git, GitHub, Docker, npm, Webpack, Babel, CircleCI</p></p>
            <p className="bulletpoint"><strong>Techniques:</strong> <p>Agile Development, Pair Programming, Test Driven Development, CI, Remote work</p></p>
            <h4> Financial Aptitudes include: </h4>
            <p className="bulletpoint">● Capital and OPEX budgeting and modeling </p>
            <p className="bulletpoint">● Predictive financial modeling and Metric tracking</p>
            <p className="bulletpoint">● Financial statement analysis</p>
            <p className="bulletpoint">● Month End Closings </p>
            <p className="bulletpoint">● Headcount and Commission Management</p>
            <p className="bulletpoint">● Executive-level Quarterly & Year End presentation skills</p>
            <p className="bulletpoint">● Capital and OPEX budgeting and modeling </p>
            <h4>Technical Skills - Finance: </h4>
            <p className="bulletpoint"> Microsoft Office, Advanced Excel, Adaptive, GP, Office Connect, MDS,
                 Essbase, Hyperion, Oracle, SAP, Adaptive, Management Reporter, internal ERP financial systems,
                 Salesforce.com </p>
            <a className="gitlink" href="https://github.com/Aaron-Waguespack/">--- GitHub Link ---</a>
            <h3 className="email">Contact me at: Aaron.Paul.Waguespack@gmail.com</h3>
            </Container>
          </Col>
        </Container>
      </div>
      </div>

    )
  }
}