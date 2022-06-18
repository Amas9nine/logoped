// 24.05.2022
// BIG Topick 
// `This` and `Context`
// `call`
// `apply`
// `bind`

// ITS WRONG EXAMPLE : {
// for example
// const person = {
// 	name:`Nikki`,
// 	age:20,
// 	sayHello(argument,arg2,arg3){
// 		console.log(`${argument} Hello ,${arg2} im ${this.name,this.age} ${arg3}`,this )
// 	}
// }
// // person.sayHello(`one`,`two`,33333)
// let f = person.sayHello.bind(person)
// f.call(person.sayHello(1,2,3))
// f.apply(person.sayHello(3,4,5))
// ITS WRONG EXAMPLE : }


// 25.05.2022
//practice
const $button = document.querySelector(`button`)
$button.addEventListener(`click`,f)

function f(){
	this.textContent = `O K`
}

//  practice #2
// const person = {
// 	name:`Nikki`,
// 	age:20,
// 	skin:`black`,
// 	sayHello(arg2,arg3,arg4){
// 		console.log(`${this.name} , ${this.age} , ${this.skin} , ${arg2} , ${arg3} , ${arg4}`,this )
// 	}
// }
// if anything maybe :
// setTimeout(person.sayHello.bind(person,	`ok`,true,false),1000)

// let f1 =person.sayHello.bind(person)
// f1(   `ok`,true ,false)

// practice #3
const person = {
	name:`Nikki`,
	age:20,
	skin:`black`,
	sayHello(arg2,arg3,arg4){
		console.log(`${this.name} , ${this.age} , ${this.skin} , ${arg2} , ${arg3} , ${arg4}`,this )
	}
}

// let f1 =person.sayHello.bind

// f1.call(person,   `ok`,true ,false)
// f1.apply(person,   [`ok`,true ,false])

// let f1 =person.sayHello
// f1()


// Explanation !!!(Обьяснение !!!)
// #1
//  f1.call(person,   `ok`,true ,false)
// call - вызывает из новой переменной `f1` значеие обьекта `person`{}

// #2
// f1.apply(person,   [`ok`,true ,false])
// apply - вызывает из новой переменной `f1` значеие обьекта `person`{}
// но аргументы вызываеться в массивах[]

// #3
// let f1 = person.sayHello.bind(person)
// f1(   `ok`,true ,false)
// bind - связывает f1 + `person.sayHello.bind(person)`
// f1()
//Привязывает function к определенному Context и возврашает новую function


