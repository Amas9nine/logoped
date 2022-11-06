import React from 'react'
import c from './Gr2.module.css'

function Gr2() {
	return (
		<div className={c.wrapp}>
			<div className={c.container}>
				<div className={c.imgS}>
					<img src="http://logoped.kg/wp-content/uploads/2018/01/squares.png" alt="" />
					<div>
						ЛОГОПЕД
						30 мин
					</div>

					<img src="http://logoped.kg/wp-content/uploads/2018/01/person.png" alt="" />
					<div>
						ЛОГОПЕД ДЕФЕКТОЛОГ
						30 мин
					</div>
				</div>

				<div id='line'></div>
				<div className={c.box2}>
					<div className={c.greenLineleft}>
						<div>Когда обращаться за помощью к логопеду?</div>
						<ul>
							<li>Нарушение звукопроизношения</li>
							<li>Трудности в овладении грамотой письменной речью</li>
							<li>Общее недоразвитие речи</li>
							<li>Проблемы с фонетической стороной речи</li>
							<li>Нарушения слоговой структуры</li>
							<li>Нарушения связной речи</li>
							<li>ОНР III – IV уровень без сопутствующих неврологических проблем</li>
							<li>Нарушения чтения и письма</li>
						</ul>
					</div>


					<div id='line'></div>
					<div className={c.greenLineRight}>
						<div>Когда обращаться за помощью к дефектологу?</div>
						<ul>
							<li>Проблемы с овладением школьной программы по математике</li>
							<li>У ребёнка неврологические проблемы</li>
							<li>Дети с особенностями в развитии</li>
							<li>Дети с проблемами в развитии</li>
							<li>Дефектолог поможет, подскажет родителям наиболее правильный для его малыша путь развития, как интеллектуальных, так и психофизических способностей.</li>
						</ul>
					</div>

				</div>

			</div>
		</div>

	)
}

export default Gr2