import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'


function HousePage() {
	const { ID } = useParams()

	const [house, setHouse] = useState(null)

	useEffect(() => {
		fetch('https://62d01fd51cc14f8c0884e2b6.mockapi.io/house/' + ID)
			.then((answer) => {
				return answer.json()
			})
			.then((jsonArr) => {
				setHouse(jsonArr)
			})
	}, [ID])
	if(!house){
		return <h2>...Data loading</h2>
	}
	return (
		<div className='page'>
			<h1>HousePage {house.price}$ </h1>
		</div>
	)
}

export default HousePage