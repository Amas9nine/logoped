// __proto__ version
let arr = [`aibek`,`dima`,`kolya`]
arr.push(`Azamat`)
// 

let human = {
	legs:2,
	arms:2,
	eyes:2,
	brain:1,
	speak:function(){
		return `bla bla`
	}
}
// 

let person = {
	name:`Azamat`,
	sum:function(a,b){
		return a+b
	},
	// __proto__:arr
	__proto__:human
}
// 

// 
// 
// 
// 
// prototype version
function Car(model,year){
	this.model = model
	this.year = year
	this.engineer = `Azamat`
}

// добавили - minus this.year
Car.prototype.age = function(){
	let date = new Date()
	return date.getFullYear() - this.year
}
// это и все


let toyota = new Car(`Camry`,2020)
let mers = new Car(`W211`,2019)


// 
// 
// 
// EXample #2


// дз создать эрархию себя 
// кто я 
// и т.д
// 11.05.2022 
// __proto__ последовательность эрархии
let AzamatOBJ = {
name:`Azamat`,
secondName:`Usupbekov`,
colorSkin:`medium black`
}

let living = {
	contry:`USA`,
city:`New-York`,
street:`Time-Square`,
number:`№11008`,
fFunctionName:function(a,b){
	 a = 10
	 b = 20
console.log(a+b)
// this.fFunctionName()
},
__proto__:AzamatOBJ}

let cosmosOBJ = {
planet:`Earth`,
galaktika:`Andromeda`,
arr:[1,2,3,true,`Rinata`,`Vasilevs`],
__proto__:living,

}

//№2 вариант
// Обращение через prototype

let kyrgyztan = new CountrY (`bishkek`,1992)
let USA = new CountrY (`New York`,1905)

function CountrY(city,years){
this.city = city
this.years = years
}

// console.log(kyrgyztan,USA)