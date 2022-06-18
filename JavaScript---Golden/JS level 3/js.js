let $form = document.querySelector(`form`)
let $showListOfUsers = document.querySelector(`#showListOfUsers`)
let $list = document.querySelector(`.list`)

let person = {}

// let list = [] это для сохранять список
let list = []

$form.submit.addEventListener(`click`,function(event){
	event.preventDefault()
	person.name=$form.name.value
	person.phone=$form.phone.value
	person.email=$form.email.value
	// list.push(person) будет показывать в листе в массиве
	list.push(person)
	// person = {} для чистки персона
	person = {}
	// 
postData(`listOfUsers`,list)
// 
})

//mix = JSON + localStorage 
function postData(key,data){
	let json = JSON.stringify(data)
	localStorage.setItem(key,json)
}

function getData(key){
	let data = localStorage.getItem(key)
	return JSON.parse(data)
}
// 

$showListOfUsers.addEventListener(`click`,function(){
	// для стирания с доски по типу $list.innerHTML =``
	$list.innerHTML =``
	let listOfUsers = getData(`listOfUsers`)
for(let i = 0;i<listOfUsers.length;i++){
	$list.insertAdjacentHTML("afterbegin",`
	<div class="user">person</div>
		<h1> ${listOfUsers[i].name}</h1>
		<h2> ${listOfUsers[i].phone}</h2>
		<h2> ${listOfUsers[i].email}</h2>	`)
}	
})


// 
// $showListOfUsers.addEventListener(`click`,f)

// function f (){ 
// let pr = prompt (`кого ты ищешь ?`).toString(``)

// if(pr == postData(key)){
// alert(`YES we have `)
// }
// else{
// 	alert(`Sorry we dont have`)
// }
// }