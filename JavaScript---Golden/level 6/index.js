// дз что бы цвета менялись при перезагрузке рандомные цвета +
// при обновлении страницы все как было сначала - расположение кнопки "НАЧАТЬ" +
// Gameend игра должна закончиться при 00
// результат игры сколько раз успел нажать столько раз - вместо времени игры 

let $start = document.querySelector(`#start`)
let $game = document.querySelector(`#game`)
let $time = document.querySelector(`#time`)
let appCtn = document.querySelector(`.app__content`)
let $body = document.querySelector(`body`)
console.log(appCtn)

$start.addEventListener(`click`,start)
function start(){
	$start.classList.add(`hide`)
	$game.style.background = `white`

	createBox()
	timer()
}
$game.addEventListener(`click`,click)
function click(event){
	if(event.target.dataset.box){
		createBox()
	}
}
// 100 это второй промежудок который стоит после = setInterval(function(){},100)


function timer(){
	let interval = setInterval(function(){
		$time.textContent = ($time.textContent - 0.1).toFixed(1)
		if($time.textContent <= 0.0){
			clearInterval(interval)
			// сюда пишу можно с innerHTML 
			// типа alert(`asdasds`)
			// alert(`FINISH GAME`)

			
			// appCtn.insertAdjacentHTML(`afterbegin`,
			// `<h1 class="finish">F I N I S H     G A M E</h1>`
			// )
		
		
			appCtn.innerHTML = `<h1 class = "finish"> F I N I S H     G A M E </h1> `
		}
		
	},100)

}

// $app.addEventListener(`click`,hidden)
// function hidden(){
// 	if($time.textContent <= 0.0){

// 	}
// }


// function hidden (){

// 	if($time.textContent <= 0.0){
// 		clearInterval()
// 	}
// }
// finish TRY AGAIN
// function finishTryAgain(){
// 	$start.classList.add(`hide`)
// 	$game.style.background = `white`
// $app.style.background = `hide`

// }


function createBox(){
	$game.innerHTML = ` `
	let box = document.createElement(`div`)

	let size = getRandom(30,100)
	let top = getRandom(0,300-size)
	let left = getRandom(0,300-size)

	// // i tryed
	// let bkgColor = getRandom(0,255)

	box.style.width = box.style.height = size + `px`
	box.style.background = `#007DFF`
	box.style.backgroundColor = `rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`
	box.style.position = `absolute`
	box.style.top = top + `px`
	box.style.left = left + `px` 

	// i tryed
	// box.style.backgroundColor = bkgColor + `rgb`

	// `data-box` - это атрибут можно написать любоеё
	box.setAttribute(`data-box`,`true`)
	$game.insertAdjacentElement(`afterbegin`,box)
}
function getRandom(min, max) {
	return Math.ceil(Math.random() * (max - min) + min);
  }


