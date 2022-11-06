import c from './Gr4.module.css'

function Gr4() {
	return (
		<div className={c.wrapp}>
			<div className={c.container}>
				<div className={c.greenLineleft}>
					<img src="http://logoped.kg/wp-content/uploads/2018/01/puzzle.png" alt="" />
					<div>ДЕФЕКТОЛОГ</div>
					<div>от 1 года до 10 лет - 30 мин</div>
					<div id='line'></div>
					<ul>
						<li>Развитие речевого общения с окружающими</li>
						<li>Формирование зрительного восприятия</li>
						<li>Формирование пространственных представлений</li>
						<li>Формирование и развитие временных представлений</li>
						<li>Формирование математических представлений</li>
						<li>Обучение игровой деятельности</li>
						<li>Формирование конструктивных навыков</li>
						<li>Развитие общей двигательной и мелкой моторики</li>
						<li>Развитие графомоторных навыков</li>
						<li>Развитие внимания, памяти, мышления</li>
					</ul>
				</div>
				<div className={c.greenLineRight}>
					<img src="http://logoped.kg/wp-content/uploads/2018/01/folder.png" alt="" />
					<div>ЛОГОПЕД ДЕФЕКТОЛОГ</div>
					<div>от 1 года до 10 лет</div>
					<div id='line'></div>
					<ul>
						<li>Работа с «неговорящими» детьми</li>
						<li>Детьми со сложной структурой дефекта</li>
						<li>Развитие речи и общего психофизического развития у детей с различными неврологическими диагнозами (см. дефектолог)</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Gr4