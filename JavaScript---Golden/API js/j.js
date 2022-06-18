// let arr = [`kyrgyzstan`,`bishkek,`chuy region`]
// let string = JSON.stringify(arr)
// let parse = JSON.parse(string)




// DONE !!! Вывел цвета  !!!
// let $lists = document.querySelector(`.lists`)
// fetch(`https://jsonplaceholder.typicode.com/photos`)
// .then((response)=>{
// 	return response.json()
// })

// .then((data)=>{
// 	let d = data.splice(0,10)


// for (const key1 in d) {
// 	$lists.insertAdjacentHTML(`beforebegin`,
// 	`
// 	<h2>${d[key1].id}</h2>
// 	<h1>${d[key1].title}</h1>
// 	<img src="${d[key1].url}" alt="" width="250">
// 	`)
// }
// })
// #






// # Done  Flags !!!
// let $course = document.querySelector(`.course`)
// fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
// .then((response)=>{
// 	return response.json()
// })
// .then((data)=>{
// console.log(data)
// for(key in data.Valute){
// 	let charCode = data.Valute[key]
// 	$course.insertAdjacentHTML(`beforeend`,
// 	`
// 	<h1>
// 	<img src='https://countryflagsapi.com/svg/afghanistan'/>
// 	${charCode.CharCode} / ${charCode.Nominal} / ${charCode.Name} = ${charCode.Value}
// 	<img src='https://countryflagsapi.com/png/usa'/>
// 	</h1>
// 	`)
// }
// })


// Did not work out - Ничего не вышло
// let imgLeft1 = 'https://countryflagsapi.com/svg/afghanistan'
// let imgLeft1Parse = JSON.parse(imgLeft1)
// let imgRigth1 = `https://countryflagsapi.com/png/858`
// let imgRigth1Parse = JSON.parse(imgRigth1)
// // #
// let $course = document.querySelector(`.course`)
// fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
// .then((response)=>{
// 	return response.json()
// })
// .then((data)=>{
// console.log(data)
// for(key in data.Valute){
// 	let charCode = data.Valute[key]
// 	$course.insertAdjacentHTML(`beforeend`,
// 	`
// 	<h1>
// 	<div>${imgLeft1Parse}</div>
// 	${charCode.CharCode} / ${charCode.Nominal} / ${charCode.Name} = ${charCode.Value}
// 	<div>${imgRigth1Parse}/div>
// 	</h1>
// 	`)
// }
// })