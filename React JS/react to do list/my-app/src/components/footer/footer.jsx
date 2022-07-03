import { useState } from 'react';
import './footer.css'
// props = {}
let Footer = (props) => {


	const onDelete = () => {
		props.onDelete(props.id)
	}

	const onEdit = () => {
		props.onEdit(props.id)

	}

	const handleCheck = () => {
		props.onCheck(props.id)
	}



	return (
		<div action="" className='radio'>
			<div className='d-flex align-items-center'>
				<input checked={props.checked} onChange={handleCheck} type="checkbox" name="" id='propsMOVE' />
				<span className={props.checked ? 'checked' : ''}>	{props.text} </span>
			</div>

			<div >
				<input onClick={onEdit} type="submit" value="Edit" className='Edit' />
				<input onClick={onDelete} type="submit" value="Del" className='Del' />
			</div>
		</div>
	)
}
export default Footer;

