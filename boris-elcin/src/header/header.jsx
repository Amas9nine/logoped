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
					О нас
				</div>
				<div>
					Контакты
				</div>
				<div>
					Войти
				</div>
			</div>
		</header>
	)
}
export default Header