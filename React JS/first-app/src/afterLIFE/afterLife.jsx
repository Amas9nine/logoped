import './AfterLife.css'
// import './index.css'
// import Kamaz from './Kamaz.png';
// import cake from './cake.png'
// import cashBack from './cashBack.png'
// import fastDelivery from './fastDelivery.png'

const AfterLife = (props) => {
	return (

		<div className='afterLIFE'>
			<div className='shortlyDiv'>
				<a href="">
					<div className='move'>
						<img src= {props.img}/>
					</div>
					<div>
						<h3 className='textBIG'>{props.textBIG}</h3>
					</div>
					<div>
						<small className='textSmall'>{props.small}</small>
					</div>
				</a>
			</div>
			
		</div>
	)
}
export default AfterLife;
