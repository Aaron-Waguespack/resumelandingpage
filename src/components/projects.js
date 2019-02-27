import React, {Component} from 'react';
import './projects.css';
import CardList from './cardlist';
import {projects} from './projectlist';
import {Container, Row} from 'react-bootstrap';
import './projects.css';
;

export default class Home extends Component {

	render() {

		return (
			<Container className="projects-container">
				<Row className="show-grid text-center">
					<CardList projects ={projects}/>
				</Row>
			</Container>
		)
	}
}