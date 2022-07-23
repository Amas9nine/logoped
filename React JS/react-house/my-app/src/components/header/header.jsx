import React from 'react'
import moduleObjectKeyS from './header.module.css'
import { Link } from 'react-router-dom'


function Header() {
	return (
		<div className={moduleObjectKeyS.header}>
			<Link to='/'>
				<h1>
					LOGO
				</h1>
			</Link>

			<nav>
				<Link className={moduleObjectKeyS.link} to="#">О нас</Link>
				<Link className={moduleObjectKeyS.link} to="#">Контакты</Link>
				<Link className={moduleObjectKeyS.link} to="/login">Войти</Link>
			</nav>
		</div>

	)
}

export default Header