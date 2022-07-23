import React, { useEffect, useState } from 'react'
import Card from '../components/card/card'


function MainPage() {
	

	const [arr, setArr] = useState([])

	useEffect(() => {
		fetch('https://62d01fd51cc14f8c0884e2b6.mockapi.io/house')
			.then((answer) => {
				return answer.json()
			})
			.then((jsonArr) => {
				setArr(jsonArr)
			})
	}, [])

	return (
		<div className='page'>
			<h1 className='title'>Последние объявления</h1>
			<div className='cards__wrapper'>
				{
					arr.map((item) => {
						return <Card key={item.id} img={item.img} title={item.title} price={item.price}
						id={item.id}
						/>
					})
					// [<Card />, <Card />, <Card />, <Card />]
				}




			</div>
			<h1 className='title'>О нас</h1>
		</div>
	)
}

export default MainPage