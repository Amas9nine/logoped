



//
// 12.05.2022
// practices at home with metod array[]

// let exampleArr = [`Azamat`,`Aibek`,`Maksim`,`Vasiliy`]

						// metod `delete`
 
// delete exampleArr[3]
// alert(exampleArr[3])
// console.log(exampleArr)
// console.log(exampleArr.length)




// let exampleArr = [`Azamat`,`Aibek`,`Maksim`,`Vasiliy`]

						// medot `splice`

// например : (0,1) ,0 - это index ,1 - это количество
// начиная от 0 и кончая колличеством 1 напрмер
// можно еще добавлять и менять сущесвуюшие elements в [] через index

// exampleArr.splice(0,1)
// exampleArr.splice(0,2,`Vera`,`Ekaterina`,`Nikita`,`Kolya`)

// console.log(exampleArr)




// let exampleArr = [`Azamat`,`Aibek`,`Maksim`,`Vasiliy`]

// 				// metod `slice`

// alert( exampleArr.slice(1, 3) ); // e,s (копирует с 1 до 3)


				// metod `concat`

// let arr = [1, 2];
// let exampleArr = [`Azamat`,`Aibek`,`Maksim`,`Vasiliy`]

// alert( arr.concat([exampleArr]))
// console.log(arr.concat([exampleArr]))





				// metod `forEach`

// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
// 	alert(`${item} имеет позицию ${index} в ${array}`);
//   });





				// metod `indexOf/lastIndexOf и includes`
// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// console.log(arr.indexOf(`Nazgul`)); // 2
// console.log(arr.lastIndexOf(`Gandalf`)) // 1
// console.log(arr.includes(`Bilbo`)) // true




				// metod `find и findIndex`

// 				let see = [
// 					{id: 1, name: `aza`},
// 					{id: 2, name: `Usupbekov`},
// 					{id: 3, name: 1995}
// 				]
// 				let look = see.find(item => item.id == 1)
// 				console.log(look.name)

// let users = [
// {id: 1, name: "Вася"},
// {id: 2, name: "Петя"},
// {id: 3, name: "Маша"}
// ];

//  let user = users.find(item => item.id == 2);


// alert(user.name); // Петя



				//metod `filter`
// let users = [
// {id: 1, name: "Вася"},
// {id: 2, name: "Петя"},
// {id: 3, name: "Маша"}
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item.name < 3);

// alert(someUsers.length); // 2



			// metod `Map`

// new option
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6

// old option
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(function(item,index,array){
// return (item)
// })
// console.log(lengths)


// `new map` + `for of`
// let recipeMap = new Map([
// 	["огурец", 500],
// 	["помидор", 350],
// 	["лук",    50]
//   ]);
//   // перебор по ключам (овощи)
//   for (let vegetable of recipeMap.keys()) {
// 	console.log(vegetable); // огурец, помидор, лук
//   }


// let number = [1,4,10,20]
// // let newNumber = number.map(function (item,index,array){
// // 	return item
// // })
// let newNumber = number.map(item => item *2)
// console.log(newNumber)


				//metod  `reduce`
// #1 через цыклы как бы это было
// let a = [10,20,30]
// let sum = 0
// for(let i = 0;i < a.length;i++){
// 	sum = sum +a[i]
// }
// console.log(sum)

// №2 reduce
// let a = [1,1,1]
// let reduceMetod = a.reduce( (prev,item,index,array)=>{
// return	prev+item},[0,a[0]])
// console.log(reduceMetod)




// 15.05.2022
// home work decide tasks
// https://pas1.ru/taskarray

// #1
// let arr = [3,9,8,4,5,1]
// console.log(arr.filter(function(elem,index,arr){
// return elem > arr[index-1]
// }))



// #1
// let arr = [1,10,8,4,5,2]
// let max = Math.max(...arr)
// console.log(max)

// тернарный оператор
// alert (5>4?true:false) 
// let a = 10
// let b = 15
// console.log(a>b?`good`:`not good`)	// тернарный оператор

// if(a>b){
// 	console.log(`good`)					// обычный оператор if
// }
// if(b>a){
// 	console.log(`not good`)
// }

// #2
// let arr = [1,10,8,4,5,2]
// let mapARR = arr.map(function(item){
// return item/max
// })
// console.log(mapARR)


//#3
// let arr = [-1,-10,-8,4,-5,-2]
// let findPol = arr.find(function(item){
// 	return item > 0
// })
// console.log(findPol)


// отличие между find и filter
// 
// find - первый попавшийся
// 	return item < 0 - найдет первый минусовые
// 	return item > 0 - найдет первый плюсовые


// filter - ищет все эллементы
// 	return item < 0 - найдет все минусовые
// 	return item > 0 - найдет все плюсовые
// 



//#9
// let arr = [1,10,8,4,5,2]

// let result = arr.reduce(function(sum,current){
// 	return sum + current
// })

// let avrg = result/arr.length

// let result1 = arr.filter(function(item){
// 	return item > avrg
// })
// console.log(result1,avrg)




// #14 
// Среднее арифметическое всех чётных элементов массива, стоящих на нечётных местах
// let arr = [1,10,8,4,5,2]
// let gew = arr.filter(function(item,index){
// 	return item % 2==0 && index %2 == 1 ? elem:0
// })
// console.log(gew)





// #19
// Удалить повторяющиеся элементы из массива
// let arr = [3,3,7,8,4,5,1,8]
// for(let i = 0;i<arr.length;i++){
// 	for(let j = i+1;j<arr.length;j++){
// 		if(arr[i]==arr[j]){
// 			arr.splice(j,1)
// 		}
// 	}
// }
// console.log(arr)