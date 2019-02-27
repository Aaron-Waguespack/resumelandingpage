import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './projects.css';


export default class Home extends Component {
	onstructor() {
		super()
		this.state={
			robots:[],
			searchfield:""
		}
	}	

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response=> response.json())
		  .then(users => this.setState({robots: users}));
	}
	
	render() {
		return (
			<Container className="projects-container">
				<Row className="show-grid text-center">
					<Col xs={12} sm={6} md={4} className="person-wrapper">
					  <a href="https://robofriends-aw.herokuapp.com/">
						<Image src="assets/robofriends.jpg" rounded className="profile-pic"/>
						<h3>{name}</h3>
						<p> Skilled finance professional with 14 years of experience in industry leading technology,
							telecom and service related companies looking to move into web development. Entire
							business cycle modeling experience from: long range planning, annual operating plans to
							monthly forecasts and closings. Primary focus in financial, forecast, budget and income
							summary modeling as well as ERP system management and data management.
						</p>
					  </a>		
					</Col>
					<Col xs={12} sm={6} md={4} className="person-wrapper">
					  <a href="https://yelpcamp-aw.herokuapp.com/campgrounds/">
						<Image src="assets/yelpcamp.jpg" rounded className="profile-pic"/>
						<h3>Yelp Camp</h3>
						<p> Skilled finance professional with 14 years of experience in industry leading technology,
							telecom and service related companies looking to move into web development. Entire
							business cycle modeling experience from: long range planning, annual operating plans to
							monthly forecasts and closings. Primary focus in financial, forecast, budget and income
							summary modeling as well as ERP system management and data management.
						</p>
					  </a>			
					</Col>
					<Col xs={12} sm={6} md={4} className="person-wrapper">
					  <a href="https://robofriends-aw.herokuapp.com/">
						<Image src="assets/robofriends.jpg" rounded className="profile-pic"/>
						<h3>RoboFriends</h3>
						<p> Using React this app dynamically creates cards for each robot from a url list.
							From there the search box removes unrelated cards on the click of each letter.
							Created with React, React-Dom and tachyons
						</p>
					  </a>
					 </Col>
					 <Col xs={12} sm={6} md={4} className="person-wrapper">
					  <a href="https://patatapclone-aw.herokuapp.com/">
						<Image src="assets/patatapclone.jpg" rounded className="profile-pic"/>
						<h3>Patatap Clone</h3>
						<p> Music creation app with sound and animations on keypress. Using the jQuery, Howler JS and Paper
							JS libraries.
						</p>
					  </a>		
					</Col>
					<Col xs={12} sm={6} md={4} className="person-wrapper">
					  <a href="https://rgbcolorgame-aw.herokuapp.com/">
						<Image src="assets/rgbcolorgame.jpg" rounded className="profile-pic"/>
						<h3>RGB Color Game</h3>
						<p> Project to practice RGB color recognition and DOM manipulation. 
							Created primarily in Javascript.
						</p>
					  </a>		
					</Col>
					<Col xs={12} sm={6} md={4} className="person-wrapper">
					  <a href="https://backgroundgen.herokuapp.com/">
						<Image src="assets/backgroundgen.jpg" rounded className="profile-pic"/>
						<h3>Background Generator</h3>
						<p>Project that allows you to pick colors from the color wheel then have them automatically
						   applied to the background gradients. It also provides you the codes for the colors and a section
						   to copy the code to apply it to other projects. Includes a randomize button that picks random
						   colors and applies them to the background. Created in Javascript.
						 </p>
					  </a>		
					</Col>
					<Col xs={12} sm={6} md={4} className="person-wrapper">
					  <a href="https://backgroundgen.herokuapp.com/">
						<Image src="assets/wedding.jpg" rounded className="profile-pic"/>
						<h3>Wedding Photos</h3>
						<p> Created a photo gallery which dynamically creates and expands the list of photos based on the 
							total amount of photos in the directory. Contains onclicks, mouseover effects and a thumbnail
							gallery	whenever a photo is expanded. Uses Bootstrap 3 & Lightbox
						</p>
					  </a>		
					</Col>
						<Col xs={12} sm={6} md={4} className="person-wrapper">
					  <a href="https://backgroundgen.herokuapp.com/">
						<Image src="assets/todolist.jpg" rounded className="profile-pic"/>
						<h3>To Do List</h3>
						<p> A small to do list app created in jQuery that allows you add new items, remove items,
							cross off items. Also uses css gradiantes
						</p>
					  </a>		
					</Col>
					<Col xs={12} sm={6} md={4} className="person-wrapper">
					  <a href="https://backgroundgen.herokuapp.com/">
						<Image src="assets/datingapp.jpg" rounded className="profile-pic"/>
						<h3>Dating App Landing Page</h3>
						<p>Landing Page with navbar, buttons, which uses Bootstrap 3 and Google Fonts</p>
					  </a>		
					</Col>
					<Col xs={12} sm={6} md={4} className="person-wrapper">
					  <a href="https://backgroundgen.herokuapp.com/">
						<Image src="assets/museumofcandy.jpg" rounded className="profile-pic"/>
						<h3>Museum of Candy Landing Page</h3>
						<p>Responsive landing page made with Bootstrap 4 customized not to look like Bootstrap.</p>
					  </a>		
					</Col>
				</Row>		
			</Container>
		)
	}
}