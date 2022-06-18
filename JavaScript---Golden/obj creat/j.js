// 18.05.2022 beening at home

// exemples practices start !!!
// #1
// let user = {
// 	name:`azamat`,
// 	age:26
// };
// console.log(user)
// user.sayHi = function(){
// 	console.log(`HEllo`.toUpperCase())
// }
// user.sayHi()

// #2
// let user = {
// sayHi:function(){
// 	console.log(`Hello`)
// }
// };user.sayHi()

// #3 
// let user = {
// 	key:`hello`,
// 	sayHi () {
// 		// console.log(`hello`.toUpperCase())
// 		console.log(this.key.valueOf())
// 	}
// };user.sayHi()



//#учимся вызывать через this в functione `key` или `value` из обьекта
// let user = {
// 		name:`Vasiliy`,
// 		age:45,
// 		f (){
// 			console.log(this.name)
// 			console.log(this.age)
// 		}
// 	}
// 	user.f()



// #4 добавляем `this.`
// let user = {
// 		name:`azamat`,
// 		age:26,

// 		sayHi (){
// console.log(this.name)
// 		}

// 	};user.sayHi()


//#5 практика 2переменные обьекта с разниым именами но с одинаковыми `key`
// let youTube = {
// 	color:`red`,
// };
// let faceBook = {
// 	color:`blue`,
// };
// console.log(youTube,faceBook)

// function f(){
// 	console.log(this.color)
// }
// youTube.f()
// 	faceBook.f()


// #спросить у Ануара про это !
// let user = { 
// 	name: "Джон" ,
//  name: "Админ" ,
// sayHi (){
//   console.log(this.name);
//   console.log(this.name)
// }
// };
// user.sayHi()

// # то что я не понял что откуда беретться
// function Shape() {
// 	this.x = 0;
// 	this.y = 0;
//   }

//   Shape.prototype.move = function(x,y){
// 	this.x += x;
// 	this.y += y;
// 	console.info('Фигура переместилась.');
//   }

//   function Rectangle() {
// 	Shape.call(this); // вызываем конструктор суперкласса
//   }	

//   Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;


// 17.05.2022
// class work

// let person = Object.create({
// 	getYear:function(){
// 		return new Date().getFullYear() - this.age
// 	}
// },
// {
// 	name:{
// 		value:`Azamat`,
// 		enumerable:true, // Скрытность
// 		writable:true,   // Перезаписать
// 		configurable:true ,// Удаление
// 	},
// 	age:{
// 		value:20
// 	},
// 	year:{
// 		get:function(){// get получить срабатываемый момент вызова
// 			return new Date().getFullYear() - this.age
// 		},
// 		set:function(){// set поменять срабатываемые момент редактирование
// 			console.log(`не меняй`)
// 		}
// 	}
// })



// home work
// #1
// создать метод для всех массивов
// создать метод double()
// let arr = [1,2,3,4,5,6,`aba`].double()
// let arr =  [2,4,6,8,10,12,`abaaba`]

// #2 создать эрархию
// let human = {
// 	pop:7000,
// 	__proto__:person
// }

// обший с помощью него нужно создать double()
// Object.prototype.uul = function(){
// 	console.log(`UUUU`)
// }

// String.prototype.len = function(){
// 	return this.length
// }
// console.log(`hello world`.len())



// 18.05.2022
// home work -IT IS home work were wrong


// class Double{
// 	constructor(multiply){
// 		this.multiply = multiply
// 	}

// 	doMultiply(multiply){
// 		this.multiply *2
// 	}
// }
// let arr = [1,2,3,4,5].doMultiply
// let mlt = new Double(`mtlMultiply`)
// console.log(arr)
// console.log(mlt)

// console.log(arr)


// practice `class` и `prototype`
// class Comment{
// 	constructor(text){
// 		this.text = text
// 		this.votesQty = 0
// 	}

// 	upvote(){
// 		this.votesQty +=1
// 	}
// }

// let firstComment = new Comment(`First comment`)
// console.log(firstComment)

// let valisiy = {
// 	name:`vasya`,
// 	age:25
// }

// let countrt = {
// country:`usa`,
// state:`new-york`,
// __proto__:valisiy
// }


// 19.05.2022
// class work - home work
// удвоить с помощью prototype
// Array.prototype.double = function(){
// 	return this.map(function(elem){
// 		return typeof elem == `number` ? elem*elem : elem+elem
// 	})
// }

// let arr = [1,2,3,5,`aa`]
// console.log(arr.double())
// let list = [`aza`,`beka`,`azizi`]
// console.log(list.double())


// class work
// i need a practices !!!!
// WE CAN MERGE ALL OF THREE TYPES

// type #1
// function City(cityName,population){
// 	this.cityName = cityName
// 	this.population = population
// }
// let city = new City(`New-york`,444444)

// type #2
// let person = {
// 	name:`aza`,
// 	age:20,
// 	__proto__:city
// 	}

// type #3
// 	let dog = Object.create(person,{
// 		dogName:{
// 			value:`Katya`,
// 			enumerable:true
// 		},
// 		dogAge:{
// 			value:2
// 		}
// 	})


// new team - CONTEXT -> `call()-" "` , `apply()`-[" "]
// easly then `bind()`
// let person = {
// 	name:`aza`,
// 	age:20,
// 	year:function(){
// 		window.setTimeout(function(){
// 			// debbuger
// 			console.log(new Date().getFullYear()-this.age)
		
// 		}.bind(this),2000)
// 		return `END`
// 	}
// }


//#exapmle Context

// function get(arg){
// 	console.log(this)
// 	console.log(arg)
// }

// let person2 = {
// 	name:`Aza`,
// 	age:20,
// 	year:function(){
// 		return this
// 	},
// dog:function(){

// }
// }
// let mass = [`Aza`,20,`sdsds`]
// get.call(person2,`hello`)
// get.apply(person2,[`HELLO`])



// #
// ЗАМЫКАНИЕ - это доступ к данным внешней функиции из внутреней функции
// ++a сначала прибавляет потом показывает
// a++ тут наоборот
// function counter(){
// 	let count = 0
// 	return function (){
// 		return ++count
// 	}
// }
// let counter1 = counter()// console.log(counter1)1,2,3,4,5
// let counter2 = counter()


//#class work tusk2 creat button
// при нажатии на кнопку вызывает увеличение числа
// let $buttons= document.querySelectorAll(`button`)

// function counter(){
// 	let count = 0
// 	return function(){
// 		this.textContent = ++count
// 	}
// }

// for(let i = 0;i<$buttons.length;i++){
// 	$buttons[i].addEventListener(`click`,counter(this))
// }


// 	<!-- #1colors -->
	// <!-- Даны кнопки. Каждая кнопка по нажатию на нее выводить следующее число Фибоначчи. Кнопки работают независимо. Решить через замыкания -->

	// с помощью dom
// 	let $changerColors = document.querySelectorAll(`button`)
// 	$changerColors.addEventListener(`click`,getRandom())
// 	function getRandom(min, max) {
// 		return Math.ceil(Math.random() * (max - min) + min);
// 	  }
	

// при помощи замыканий
// # colors
let colors = [`red`,`black`,`blue`,`yellow`,`orange`,`green`,`pink`,`purple`,`grey`,`brown`]
let $btn=document.querySelectorAll(`button`)
function counter(){
		let count = 0
		return function(){	
			this.style.color = colors[count]
			count++
			if(count==colors.length){
				count=0
			}
		}
	}
	for(let i = 0;i<$btn.length;i++){
		$btn[i].addEventListener(`click`,counter(this))
	}


// # backgtoundColor
	let backgroundColor = [`red`,`black`,`blue`,`yellow`,`orange`,`green`,`pink`,`purple`,`grey`,`brown`].reverse()
	function countBackColor(){
		let countColor = 0
		return function(){
			this.style.background = backgroundColor[countColor]
			countColor++
			if(countColor==backgroundColor.length){
				countColor=0
			}
		}
	}	
	for(let i = 0;i<$btn.length;i++){
		$btn[i].addEventListener(`click`,countBackColor(this))
	}

	
// # укороченный вариант  // при помощи замыканий
	function counter(){
		let count = 0
		return function(){
			this.style.color = arr[count++]
			this.style.backgroundColor = arr[++count]
		}
	}

	
