import React, {Component} from 'react';
import './projects.css';
import CardList from './cardlist';
import {projects} from './projectlist';
import {Container, Row, Image} from 'react-bootstrap';
import './projects.css';
;

export default class Projects extends Component {

myID = document.getElementById("myID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 800) {
    myID.className = "bottomMenu show"
  } else {
    myID.className = "bottomMenu hide"
  }
};

window.addEventListener("scroll", myScrollFunc);

	render() {

		return (
			<div>
			 <Image src="assets/carsc.jpg" className="header-image-projects" />
			 <div id = "myID" >Test This</div>
			<Container className="projects-container">
				<Row className="show-grid text-center">
					<CardList projects ={projects}/>
				</Row>
			</Container>
			</div>
		)
	}
}