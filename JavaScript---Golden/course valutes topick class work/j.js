// Fetch - API 
// 28.05.2022
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
// 	`<h1>${charCode.CharCode} / ${charCode.Nominal} / ${charCode.Name} = ${charCode.Value}</h1>`)
// }
// })


// with Object.keys()
// let $course = document.querySelector(`.course`)
// let url = `https://www.cbr-xml-daily.ru/daily_json.js`
// fetch(url)
// .then((response)=>{
// 	return response.json()
// })
// .then((data)=>{
// console.log(data)
// let nominal = Object.values(data.Valute)
// nominal.forEach((item)=>{
// 	$course.insertAdjacentHTML(`beforeend`,
// 	`<h1>${item.CharCode} / ${item.Nominal} / ${item.Name} = ${item.Value}</h1>`)
// })
// })