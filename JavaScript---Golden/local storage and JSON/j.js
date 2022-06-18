// №1
// const $btn = document.querySelectorAll(`button`)
// const $body = document.querySelector(`body`)

// function f (){
// alert( ` ok usually function`)
// }

// $body.addEventListener(`click`,function (event){
// 	if(event.target.closest(`button`)){
// 		f()
// 	}
// })


// №2
// const $a = document.querySelector(`a`)

// $a.addEventListener(`click`,function(event){
// 	event.preventDefault( )
// 	prompt(`OUR ACTION`)
// 	// и алерт и и все на свете можно сюда вместо - `OUR ACTION`
// })


// №3
// JSON practices
// let obj = {
// 	a:100,
// 	b:true,
// 	c:`text about something`,
// 	d:null
// }

// let jsonSTR = JSON.stringify(obj)
// console.log(jsonSTR)

// let jsonPRS = JSON.parse(jsonSTR)
// console.log(jsonSTR)


// mix localStorage + JSON

// function postData(key,data){
// 		let json = JSON.stringify(data)
// 		localStorage.setItem(key,json)
// 	}
	
// 	function getData(key){
// 		let data = localStorage.getItem(key)
// 		return JSON.parse(data)
// 	}
	


//Local storage practices 

// const myNumber = 4
// let set = localStorage.setItem(`number`,myNumber.toString())
// // console.log(set)
// let get = localStorage.getItem(`number`,myNumber)
// console.log(get)


// practices in IMPZ
// const $btn = document.querySelector(`button`)
// $btn.addEventListener(`click`,SHOW)





// let obj = {
// 	a:`good`,
// 	b:true,
// 	part2:false
// }

// function SHOW(){
// let jsonSTR = JSON.stringify(obj)
// localStorage.setItem('aa',jsonSTR)
// console.log(jsonSTR)
// let jsonPRS = JSON.parse(jsonSTR)
// localStorage.getItem(`aa`,jsonPRS)
// console.log(jsonPRS)

// }
// SHOW()


// i want that btn be `hidden`
const $btn = document.querySelector(`button`)
const $dv = document.querySelector(`.element`)

$btn.addEventListener(`click`,f)
function f(event){
	event.preventDefault()
	$dv.classList.toggle(`element-hidden`)
}

// IMG hidden
const $img = document.querySelector(`.img`)
const $btnCoca = document.querySelector(`#BTNCoca`)

$btnCoca.addEventListener(`click`,coca)

function coca(event){
event.preventDefault()
$img.classList.toggle(`imgHidden`)
}