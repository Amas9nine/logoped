import './App.js';
import './AfterLife.css'
// import Kamaz from './Kamaz.png';
// import cake from './cake.png'
// import cashBack from './cashBack.png'
// import fastDelivery from './fastDelivery.png'

const AfterLife = () => {
	return (

		<div className='afterLIFE'>
			<div className='shortlyDiv'>
				<a href="">
					<div>
						<img src={Kamaz} id="Kamaz" />
					</div>
					<div>
						<big>Free Shipping</big>
					</div>
					<div>
						<small>Last Chance! Free shipping on all orders ends today.</small>
					</div>
				</a>
			</div>

			<div className='shortlyDiv'>
				<a href="" className="">
					<div>
						<img src={cake} id="cake" />
					</div>
					<div>
						<a href=""></a>
						<big>Quick Packaging</big>
					</div>
					<div>
						<small>Last Chance! Free shipping on all orders ends today.</small>
					</div>
				</a>
			</div>

			<div className='shortlyDiv'>
				<a href="">
					<div>
						<img src={cashBack} id="cashBack" />
					</div>
					<div>
						<a href="" className="">
							<big>100% Money Back</big>
						</a>
					</div>
					<div>
						<small>Last Chance! Free shipping on all orders ends today.</small>
					</div>
				</a>
			</div>

			<div className='shortlyDiv'>
				<a href="">
					<div>
						<img src={fastDelivery} id="fastDelivery" />
					</div>
					<div>
						<big>Fast Delivery</big>
					</div>
					<div>
						<small>Last Chance! Free shipping on all orders ends today.</small>
					</div>
				</a>
			</div>
		</div>

	)
}
export default AfterLife;