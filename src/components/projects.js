import React, {Component} from 'react';
import './projects.css';
import CardList from './cardlist';
import {projects} from './projectlist';
import {Container, Row, Image} from 'react-bootstrap';
import './projects.css';
import Index from './scroll';


export default class Projects extends Component {

	render() {

		return (
			<div>
			 <Image src="assets/carsc.jpg" className="header-image-projects" />
			 <Index
			 handleScroll = {this.props.handleScroll}
			 opacity = {this.props.opacity}
			 />
			<Container className="projects-container">
				<Row className="show-grid text-center">
					<CardList projects ={projects}/>
				</Row>
			</Container>
			</div>
		)
	}
}