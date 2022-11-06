import c from './Gr5.module.css'
function Gr5() {
	return (
		<div className={c.wrapp}>
			<div className={c.container}>
				<div className={c.greenLineleft}>
					<img src="http://logoped.kg/wp-content/uploads/2018/01/cubes.png" alt="" />
					<div>ЛОГОПЕД</div>
					<div>от 4 лет до 10 лет - 30 мин</div>
					<div id='line'></div>
					<div>Когда обращаться за помощью к логопеду-дефектологу?</div>
					<ul>
						<li>Занятия по устранению проблем звукопроизношения и развитию общеречевых навыков, обучение грамоте.</li>
					</ul>
				</div>
				<div className={c.greenLineRight}>
					<img src="http://logoped.kg/wp-content/uploads/2018/01/teacher.png" alt="" />
					<div>КОРРЕКЦИОННЫЙ ПЕДАГОГ</div>
					<div>45 мин</div>
					<div id='line'></div>
					<ul>
						<li>Подготовка к школе</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Gr5