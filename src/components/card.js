import React from 'react';
import {Col, Image} from 'react-bootstrap';
import './card.css';

const Card =({name, desc, id, image, link, gitlink}) => {
	return(

			<Col xs={12} sm={6} md={4} className="person-wrapper">
			<h4>_________________</h4>
			  <a href={link}>
				<Image src={image} rounded className="profile-pic"/>
				<h3>{name}</h3>
				<p> {desc} </p>
			  </a>	
			  <a href={gitlink}>GitHub Link</a>	
			</Col>			
	);
}

export default Card;