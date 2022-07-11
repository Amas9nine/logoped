import React from 'react'
import './header.css'

function Header() {
	return (
		<header>
			<div className='headerLeft'>
				<img src="LOGO.png" alt="" />
			</div>

			<div className='headerRight'>
				<div>
					<a href="#" target="_blank">	О нас</a>
				</div>
				<div>
					<a href="#" target="_blank">Контакты</a>
				</div>
				<div>
					<a href="#" target="_blank">Войти</a>
				</div>
			</div>
		</header>
	)
}
export default Header