let $inp = document.querySelector(`#inp`).value
let $btn = document.querySelector(`#btn`)

$btn.addEventListener(`click`,function f(event){
	event.preventDefault( )
	alert(document.querySelector(`#inp`).value*document.querySelector(`#inp`).value)
})

// 

let $inp2 = document.querySelector(`#inp2`).value
let $btn2 = document.querySelector(`#btn2`)

$btn2.addEventListener(`click`,function f2(event){
	event.preventDefault( )
alert(document.querySelector(`#inp2`).value/document.querySelector(`#inp2`).value)
})

// 

let $inp3 = document.querySelector(`#inp3`).value
let $btn3 = document.querySelector(`#btn3`)

$btn3.addEventListener(`click`,function f3(event){
	event.preventDefault( )
alert(document.querySelector(`#inp3`).value-document.querySelector(`#inp3`).value)
})

// 

let $inp4 = document.querySelector(`#inp4`).value
let $btn4 = document.querySelector(`#btn4`)

$btn4.addEventListener(`click`,function f4(event){
	event.preventDefault( )
alert(document.querySelector(`#inp4`).value-document.querySelector(`#inp4`).value)
})
