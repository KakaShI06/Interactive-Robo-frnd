import React from 'react';
// import ReactDom from 'react-dom';

function Card (props){
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${props.id}?size=200x200`} alt="Robots"/>
			<div>
				<h1>{props.name}</h1>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;