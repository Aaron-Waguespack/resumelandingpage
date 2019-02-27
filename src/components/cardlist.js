import React from 'react';
import Card from './card';


const CardList = ({projects}) => {
	return (
		<div>
			{projects.map((user, i) =>{
				return (
					<Card 
					key={projects[i].id}
					name={projects[i].name}
					image={projects[i].image}
					desc={projects[i].desc}
					link={projects[i].link}
					gitlink={projects[i].gitlink}
					/>
				);	
			})}
		</div>
	);
}

export default CardList;