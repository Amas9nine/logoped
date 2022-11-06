import React from 'react'
import c from './News.module.css'

function News() {
	return (
		<div className={c.wrapp}>
			<div className={c.wrappRGBA}>
				<div className={c.container}>

					<div className={c.left}>
						<div className={c.square}>
							<div className={c.midle} id={c.midleFirst}>
								<div className={c.rubickMini}>
								</div>
								<h1>НОВОСТИ И СТАТЬИ</h1>
							</div>
						</div>
						<div className={c.square} >
							<div className={c.white}>
								<div>КОХЛЕАРНЫЙ ИМПЛАНТАТ</div>
							</div>
							<div className={c.midle}>
								<img src="http://logoped.kg/wp-content/uploads/2018/02/27-300x180.jpg" alt="" />
								<div>Кохлеарный имплантат — медицинский прибор, протез, позволяющий компенсировать потерю...</div>
							</div>
						</div>
						<div className={c.square}>
							<div className={c.white}>
								<div>ЧТО ТАКОЕ ДЦП?</div>
							</div>
							<div className={c.midle}>
								<img src="http://logoped.kg/wp-content/uploads/2018/02/1-300x180.jpg" alt="" />
								<div>ДЦП — это детский церебральный паралич. Это целая группа...</div>
							</div>
						</div>
						<div className={c.square}>
							<div className={c.white}>
								<div>ГИПЕРРАКТИВНЫЙ РЕБЕНОК. ПРИЧИНЫ. И КАК...</div>
							</div>
							<div className={c.midle}>
								<img src="http://logoped.kg/wp-content/uploads/2018/02/giperaktivnyi-rebenok-v-shkole-2265-300x180.jpg" alt="" />
								<div>Гиперреактивность встречается у большого количества детей и серьезно мешает...</div>
							</div>
						</div>
						<div className={c.square}>
							<div className={c.white}>
								<div>ЛОГОПЕДИЧЕСКИЙ МАССАЖ, ЧТО ОН ИЗ...</div>
							</div>
							<div className={c.midle}>
								<img src="http://logoped.kg/wp-content/uploads/2018/02/logopedicheskiy-massaj-dlya-detei-mini-1-300x180.jpg" alt="" />
								<div>Детям со значительными речевыми расстройствами (алалия, дизартрия, дислалия, обусловленная...</div>
							</div>
						</div>
					</div>

					<div className={c.right}>
						<div className={c.square}>
							<div className={c.white}>
								<div>УМСТВЕННАЯ ОТСТАЛОСТЬ</div>
							</div>
							<div className={c.midle}>
								<img src="http://logoped.kg/wp-content/uploads/2018/02/simptomi-umstvennoj-otstalosti-300x180.jpg" alt="" />
								<div>Термином «умственная отсталость» в дефектологии обозначается стойко выраженное снижение...</div>
							</div>
						</div>
						<div className={c.square}>
							<div className={c.white}>
								<div>ЗРР- ЗАДЕРЖКА РЕЧЕВОГО РАЗВИТИЯ</div>
							</div>
							<div className={c.midle}>
								<img src="http://logoped.kg/wp-content/uploads/2018/02/zaderzhka-rechevogo-razvitiya-u-rebenka-300x180.jpg" alt="" />
								<div>Задержка Речевого Развития (ЗРР).Это тонкое и сложное заболевание, в...</div>
							</div>
						</div>
						<div className={c.square}>
							<div className={c.white}>
								<div>КАК ВЫБРАТЬ ХОРОШИЙ СЛУХОВОЙ АППАРАТ!?</div>
							</div>
							<div className={c.midle}>
								<img src="http://logoped.kg/wp-content/uploads/2018/02/2012.11.22__14.55.28__8767-300x180.jpg" alt="" />
								<div>Уважаемые родители, зачастую не многие могут выбрать хороший и...</div>
							</div>
						</div>
						<div className={c.square}>
							<div className={c.white}>
								<div>ЧЕМ МАМА ОТЛИЧАЕТСЯ ОТ ТЕЛЕВИЗОРА?</div>
							</div>
							<div className={c.midle}>
								<img src="http://logoped.kg/wp-content/uploads/2018/02/105dee25bca1acd606f7b16ebcdb4f8b-300x180.jpg" alt="" />
								<div>Чем МАМА отличается от телевизора? Лично мое мнение как...</div>
							</div>
						</div>
						<div className={c.square}>
							<div className={c.white}>
								<div>«ОСОБЫЙ РЕБЕНОК» В СЕМЬЕ. ПОМОЩЬ...</div>
							</div>
							<div className={c.midle}>
								<img src="http://logoped.kg/wp-content/uploads/2018/02/27-300x180.jpg" alt="" />
								<div>Рождение ребенка с нарушениями в развитии всегда является стрессом...</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default News