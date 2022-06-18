// 26.05.2022
// DataBase
// API
// jsonplaceholder.typecode.com


// Асинхроннасть
// client->server->DataBase->Server->Client

// имуляция пример
// console.log(`Клиент :Запрос на получение списка пользователей`)
// console.log(`...`)

// setTimeout(function(){
// 	console.log(`Сервер:запрос в базу данных`)
// 	console.log(`...`)
// 	setTimeout(function(){
// 		console.log(`DataBase:Находит данные трансформируеться данные`)
// 	console.log(`...`)
// 	setTimeout(function(){
// 		console.log(`Сервер : Получили данные формируем список пользователей`)
// 		console.log(`...`)
// 		setTimeout(function(){
// 			console.log(`Клиент : Показывает список пользователей`)
// 			console.log(`...`)
// 		},1000)
// 	},1000)
// 	},1000)
// },1000)

// let promise = new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		console.log(`Сервер:запрос в базу данных`)
// 	console.log(`...`)
// 	let get = {
// 		key:`listOfUsers`
// 	}
// 	reject(`Данные не нашлись код ошибки 404`)
// 	},1000)
// })

// //r - request
// promise.then(function(r){
// 	setTimeout(function(){
// 		console.log(r)
// 		console.log(`DataBase: Находит данные трансформирует данные`)
// 		console.log(`...`)
// 	},1000)
// })


// new option
// c `for of`
// let url = `https://jsonplaceholder.typicode.com/users`
// fetch(url)
// .then(function(response){
// 	return response.json()
// })
// .then(function(data){
// 	for(let items of data){
// 		document.querySelector(`body`).insertAdjacentHTML(`afterbegin`,
// 		`<h1>${items.name} , ${items.email}</h1>`
// 		)
		
// 	}
// })
// 
// new option #2
// c `forEach` + `()=>`
// let url = `https://jsonplaceholder.typicode.com/users`
// fetch(url)
// .then(function(response){
// 	return response.json()
// })
// .then(function(data){
// 	data.forEach(items => {
// 		document.querySelector(`body`).insertAdjacentHTML(`afterbegin`,
// 		`<h1>${items.name} ,
// 		 ${items.email},
// 		 ${items.phone}
// 		 </h1>`
// )
// }
// )
// }
// )

// 
// 
// Home Work do PracTicSE 
// 27.05.2022
// let url = `https://jsonplaceholder.typicode.com/users`
// fetch(url)
// .then(function(argument){
// return argument.json()
// })
// .then(function(secondArgument){
// secondArgument.forEach(function(item){
// 	document.querySelector(`body`).insertAdjacentHTML(`beforebegin`,
	
// 	`
// 	<h1>
// 	${item.username} 
// 	${item.name}
// 	</h1>
// 	`
// 	)
// 	console.log(item.name,item.username)
// }
// )
// }
// )


// #
// let url = `https://jsonplaceholder.typicode.com/users`
// fetch(url)
// .then((item)=>{
// return item.json()
// })
// .then((item2)=>{
// 	item2.forEach((el)=>{
// 		let $BoDy= document.querySelector(`body`)
// 		$BoDy.insertAdjacentHTML(`afterbegin`,
// 		`
// 		<h1>
// 		${el.name}
// 		</h1>
// 		`)
// 	}
// 	)
// })




// #
// let a = 7

// console.log(a)

// let b = new Promise(function(res,reg){
// 	setTimeout((f)=>{
// 		a=10
// 		res(a = 10)
// 	},2000)
// })

// b.then(function f(){
// 	console.log(a)
// })