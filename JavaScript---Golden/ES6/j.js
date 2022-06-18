// 21.05.2022
// es6

//#1
// function sum (a){
// 	return a+1
// }
// //#2
// let sum = (a) => {
// 	return a + 1
// }
// //#3
// let sum = (a) =>a+1


// arrow function
// ()=>
// #1
// let person = {
// 	name:`Aza`,
// 	age:22,
// 	year:()=>{
// 		setTimeout(()=>{
// 			console.log(new Date().getFullYear() - this.age)
// 		})
// 	}
// }


// function ()
// #2
// let person = {
// 	name:`Aza`,
// 	age:22,
// 	year:function(){
// 		setTimeout(function(){
// 			console.log(new Date().getFullYear() - this.age)
// 		}.bind(this))
// 	}
// }


// defaul parametrs
// #
// let personPrint = (name,age,year = 2020) => {
// 	console.log('Privet' + name , 'Vam' +age, 'VI s ' + year )
// }
// function printPerson(name,age,year = 2019){
// 	console.log('Privet' + name , 'Vam' +age, 'VI s ' + year )
// }

// personPrint(`Aza`,22,2022) //
// printPerson(`Aza`,22,2022) // = это на случай если забудем напсиать год `printPerson(`Aza`,22,2022)`


// #
// flexible key
// #
// let nameName = `namePerson`

// let person2 = {
// 	name:`Aza`,
// 	[nameName]:22,
// 	[`year`]:2002,
// 	year(){

// 	},
// 	year2:function(){

// 	},
// 	year3:()=>{

// 	}
// }




// #
//...spread
// function print(name,age,year){
// 	console.log('Привет' + name,'вы ' + age,'вы с '+ year)
// }
// function print2(...arr){ 		//rest
// console.log(arr)
// }

// let arr = [`Aza`,22,2022]

// print2(`Aza`,22,2022)
// print(...arr)		 //spread
// console.log(arr)

// for example
// Math.max,min(...arr)
// 



// #
// Destructurization

// let person3 = {
// 	name:`Aza`,
// 	age:22,
// 	year:2022,
// 	job:`Developer`
// }

// function write(){
// 	let {name,age,year,job} = this //деструкторизация обьекта
// 	console.log(name,age,year,job)
// }

// let list = [`aziz`,`amirhan`,`Aza`]
// let [uch1,uch2,uch3,...rest]=list //деструкторизация массива
// write.call(person3) // передача контекста


// FOR of , FOR in
// let person3 = {
// 	name:`Aza`,
// 	age:22,
// 	year:2022,
// 	job:`Developer`
// }
// for(item in person3){
	// console.log(person3[item])//итерация ключей обьекта -  лучще с {} VALUASE
	// console.log(item)//KEYS
	// console.log()
// }
// // 
// let list = [`aziz`,`amirhan`,`Aza`]
// for(elem of list){
// 	console.log(elem) // итерация ключей массива - 	лучше с []
// }



// 22.05.2022
// HOME WORK

// #1 
// Даны 2 инпута , все что в них пишется печатается на консоле
// let $ButtoN= document.querySelector(`button`)
// $ButtoN.addEventListener(`click`,f)
// function f(){
// console.log(document.querySelector(`input`).value)
// }
// <!-- D O N E !!! -->


// второй вариант
let $inputs = document.querySelectorAll(`input`)
$inputs.forEach((elem)=>{
	elem.addEventListener(`input`,()=>{
		console.log(elem.value)
	})
})


// #2
// Запишите соответствующие значения в переменные name, surname и age. Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}
// let person = {
// 	name: `Геннадий`,
// 	surname: `Букин`,
// 	age: 55
// };

// let person2 = {
// 	// empty  - пусто
// 	}
// let {name = 'Вася',surname=`Василек`,age=45 } = person
// console.log(`  U are ${name} UR surename ${surname} ur old is ${age}`)


// #second option with function
// function person(name=`Геннадий`,surname=`Букин`,age=55){
// console.log(`u are ${name},ur surname ${surname},age is ${age}`)
// };
// person(`Петр`,`Петрович`,20)
// person();



// #3
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}. Запишите соответствующие значения в переменные name, surname и age.
// let person = {
// 	name: `Пидер`,
// 	surname: `Пидеров`,
// 	age: `20 лет`
// };
// let {name,surname,age}=person
// console.log(`u are ${name} , ur surname is ${surname} ,ur old is${age}`)
// console.log(`u are , ur surname is  ,UR old is `)



// #4
// Дан массив с числами, найдите сумму элементов этого массива.
// let arr = [1,2,3,4,5]
//  let count = arr.reduce(function(prev,item,index,array){
// 	return(prev+item)
//  },0)
//  console.log(count)



// второй эллемент
// let arr = [1,2,3,4,5]
// let sum = 0
// for(let i of arr){
// 	sum=sum+elem
// }
// console.log(sum)



// #5
// Дан массив, выведите его элементы последовательно на экран.
// первый вариант через цыкл for
// let arr = [1,2,3,4,5]
// for(i=0;i<arr.length;i+=1){
// 	arr[i]
// }
// console.log(arr)



// второй варинт forEach
// let arr = [1,2,3,4,5];
// let empty = []
// arr.forEach(function(item,index,array){
// empty.push(item)
// })
// console.log(empty)

// третий вариант map
// let arr = [1,2,3,4,5];
// let show = arr.map(function(item,index,array){
// 	return item
// })
// console.log(show)

// четвертый вариант for of	
// let arr = [1,2,3,4,5];
// for(let show of arr){
// 	console.log(show)
	// console.log(arr)
// }


// #6
// let arr = [1,2,3,4,5].reverse();
// for(let i = 0;i<arr.length;i+=1){
// 	console.log(arr[i])
// }



// #7
// Example
// const user = {
// 	name:`Azamat`,
// nameOfWife:`Nikki` };

// const newUser = {
// ...user,
// marry:true
// };
// // Возраст поменялся
// console.log(user)
// console.log(newUser)

// #7
// Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3, а все остальные элементы массива - в переменную arr.
// let elem1=[1,2,3,4,5]
// let elem2=[6,7,8,9,10]
// let elem3=[11,12,13,14,15]
// let arrMergeS= [...elem1,...elem2,...elem3]
// console.log(arrMergeS)

// #8
// Дана строка. С помощью for-of подсчитайте количество букв 'о' в ней.
// let s = `Moloko`
// for(let i of s){
// 	console.log(i == `o`? i:``)
// }


// let $p = document.querySelectorAll(`p`)
// $p.forEach(function(elem){
// 	elem.addEventListener(`click`, ()=>{
// 		setInterval(()=>{
// 			elem.textContent =Number(elem.textContent) + 1
// 		},100)
// 	})
// })




// spread = собрать массив
// rest = разобрать массив