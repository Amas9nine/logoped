import './main.css'
import Slider from 'react-slick'

let data = [
	{
		id: 1,
		img: './mainIMG.jpg'
	}
	,
	{
		id: 2,
		img: './MainTwo.jpg'
	}
]

function Main() {
	const settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}
	return (

		<div className='img'>
			<div >
				<div className='container'>
					<div className='leftMain'>
						<a>ГЛАВНАЯ</a>
						<a>О НАС</a>
						<a>НОВОСТИ</a>
						<a>ДЛЯ РОДИТЕЛЕЙ</a>
						<a>ДОСТИЖЕНИЯ</a>
						<a>ГАЛЕРЕЯ</a>
						<a>КОНТАКТЫ</a>
					</div>
					<div className='rightMain'>
						<button>ОСТАВИТЬ ЗАЯВКУ</button>
					</div>
				</div>
			</div>

			<Slider className='slider' {...settings}>
				{/* <div style={{ background: 'url("/mainIMG.jpg")' }}></div>
					<div style={{ background: 'url("/MainTwo.jpg")' }}></div> */}
				{data.map((item) => {
					return <div className='anotherImg'>
						<img src={item.img} alt="" />
					</div>
				})}
			</Slider>



		</div>
	)
}

export default Main