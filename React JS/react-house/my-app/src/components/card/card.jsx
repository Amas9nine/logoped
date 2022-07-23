import React from 'react'
import { Link } from 'react-router-dom'
import moduleObjectKeyS from './card.module.css'
 
function Card(props) {
	
	return (
		<div className={'card ' + moduleObjectKeyS.card}>
			<img src={props.img || "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<h5 className="card-title">{props.price}</h5>
				<Link to={`house/${props.id}`} className="btn btn-primary" >Купить {props.id}</Link>
			</div>
		</div>
	)
}

export default Card