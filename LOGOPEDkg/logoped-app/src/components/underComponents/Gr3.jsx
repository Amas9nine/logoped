import c from './Gr3.module.css'

function Gr3() {
	return (
		<div className={c.wrapp}>
			<div className={c.container}>
				<div className={c.greenLineleft}>
					<img src="http://logoped.kg/wp-content/uploads/2018/01/paper.png" alt="" />
					<div>КОМПЛЕКСНАЯ ДИАГНОСТИКА 3 в 1 - 30 мин</div>
					<div id='line'></div>
					<ul>
						<li>Вам предоставляется возможность за 1 посещение получить квалифицированную консультацию у «трёх специалистов» — логопеда, дефектолога, нейропсихолога.</li>
						<li>Диагностика направлена на всестороннее изучение ребёнка, выявление его сильных и слабых сторон, для дальнейшей более успешной коррекции или компенсации проблем развития.</li>
					</ul>
				</div>
				<div className={c.greenLineRight}>
					<img src="http://logoped.kg/wp-content/uploads/2018/01/mind.png" alt="" />
					<div>ПСИХОЛО 30 мин</div>
					<div id='line'></div>
					<div>Когда обращаться за помощью к психологу?</div>
					<ul>
						<li>Детские страхи</li>
						<li>Возрастные капризы («не хочу!», «не буду!»)</li>
						<li>Формирование психологической готовности к школa</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Gr3