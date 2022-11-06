import c from './Map.module.css'

function Map() {
	return (

		<div className={c.headerLast}>
			<div>
				<div className={c.containerL}>
					<div className={c.one}>
						<div className={c.rubickLast}>
						</div>
						<div>
							КОНТАКТЫ И АДРЕСА
						</div>
					</div>



					<div className={c.two}>
						<div className={c.underONE}>
							<div className={c.imgCorrect}>
								<img className={c.img} src="https://w7.pngwing.com/pngs/140/267/png-transparent-codepen-computer-icons-computer-software-mail-icon-angle-triangle-desktop-wallpaper.png" alt="" />
								<div>
									gylnara09@raimbler.ru
									aisdd05@mai.ru
								</div>
							</div>

							<div className={c.imgCorrect}>
								<img className={c.img} src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Instagram-logo-transparent-PNG.png" alt="" />
								<img className={c.img} src="https://site-393266.mozfiles.com/files/393266/facebook_icon-8.png" alt="" />
								<img className={c.img} src="https://w7.pngwing.com/pngs/326/350/png-transparent-logo-computer-icons-skype-icon-text-logo-black.png" alt="" />
								<div>
									звонить по social media
								</div>
							</div>
						</div>
						<div className={c.underTWO}>
							<img className={c.img} src="https://www.iconpacks.net/icons/1/free-phone-icon-14-thumb.png" alt="" />

							<div>
								+996(312)910280
								+996(312)910240
								+996(312)910261
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Map