import React from 'react'
import './card.css'

function Card(props) {
	// const onDelete = () => {
	// 	props.onDelete(props.id)
	// }

	return (
		<div className='area_of_card'>
			<div className='card'>
				<img src={props.img} />
				<div className='text'>
					<p>
						{props.p}
					</p>
				</div>
				<br />
				<div className='price'>
					{props.price}
				</div>
				<br />
				<div className='divBTN'>
					<button  >Купить</button>
				</div>
				<hr />
			</div>

		</div>
	)
}

export default Card