import c from './YouTube.module.css'
import Slider from 'react-slick'

const data = [
	{
		id: 1,
		img: 'http://img.youtube.com/vi/kBFOso9ijlk/mqdefault.jpg'
	}
	,
	{
		id: 2,

		img: 'http://img.youtube.com/vi/uQlSqjq_tYA/mqdefault.jpg'
	}
	,
	{
		id: 3,

		img: 'http://img.youtube.com/vi/GE6oRIZ1MsQ/mqdefault.jpg'
	}
	,
	{
		id: 4,

		img: 'http://img.youtube.com/vi/ALk7GeLUtck/mqdefault.jpg'
	}
	,
	{
		id: 5,
		img: 'http://img.youtube.com/vi/in_rytVSPaw/mqdefault.jpg'
	}
]


function YouTub() {

	const settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1
	}

	return (

		<div className={c.wrapp}>
			<div className={c.container}>
				<div className={c.left}>
					<div className={c.rubickMini}>
					</div>
					<div>ФОТО И ВИДЕО ГАЛЕРЕЯ</div>
				</div>
				<div className={c.right}>
					<div>
						<img src="http://logoped.kg/wp-content/uploads/2018/02/image-9-1-300x180.jpg" alt="" />
						<img src="http://logoped.kg/wp-content/uploads/2018/02/IMG_0690-300x180.jpg" alt="" />
						<img src="http://logoped.kg/wp-content/uploads/2018/02/image9-300x180.jpg" alt="" />
						<img src="http://logoped.kg/wp-content/uploads/2018/02/image-300x180.jpg" alt="" />
						<img src="http://logoped.kg/wp-content/uploads/2018/02/1447412486678_8-300x180.jpg" alt="" />
						<img src="http://logoped.kg/wp-content/uploads/2018/02/1-2-1-300x180.jpg" alt="" />
					</div>
				</div>
			</div>
			<div className={c.container2} id={c.slick}>
				<Slider {...settings}>

					{/* <div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div> */}


					{data.map((item) => {
						return <div className={c.card}>
							<img src={item.img} />
						</div>
					})}


					{/* 					
					{data.map((item) => (
						<SliderCard img={item.img} />
					)
					)
					} */}

				</Slider>
			</div>
		</div>
	)
}


export default YouTub