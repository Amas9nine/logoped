// deaf iphone - 1 assigment
// start here
// let number = 0
// function w(){
// 	while (number <= 10) {
// 	alert(number)
// 		number++;
// 	}
// }
// w()



// {

//a+b 2 - assigment
// start here
// let ab = 2 + 3
// alert (ab)

// }


// a+b - i could'nt

// let ask = prompt `сколько будет 2 + 3 ?`
// let five = 5

// if( ask == 5 ){
// 	 alert `правильно`

// }
// if(ask <=5){
	
// alert `не правильно`
// }





//больше-меньше 3 - assigment
// start here
// let num = 5
// if(num<7){
// alert (`${num} меньше 7`)
// }

// let num2= -7
// if(num2 > -12){
// 	alert (`${num2} больше чем -12`)
// }

// let num3 =13
// if(num3==13){
// alert (`${num3} равно 13`)
// }


// Бисер - assigment 4
// let businka = 10
// let businkaRest = 2
// start here
// if(prompt(`сколько осталось бусинок ?`) === 2 ){
// alert(`правильно`)
// }
// else{
// alert(`нет неверно`)
// }

// Бисер opyion two
// start here
// for(let a = 3;a <=4 ; a++){
// 	alert (`${a}`)
// }




// factorial
// let numb = Number(prompt(`whrite numb`))
// let fact = 1
// for(let i = 1;i<= numb;i++){
// 	fact = fact * i
// 	console.log(fact)
// }

// factorial 
// let numb = Number(prompt(`whrite numb`))
// let fact = 1
// for(let i = 1;i<= numb;i++){
// 	fact = fact * i
// 	// console.log(fact)
// }
// console.log(fact)




// factorial
// let numb = Number(prompt(`whrite numb`))
// let numb2 = Number(prompt(`whrite numb`))
// let fact =1
// while(numb>1){
// fact*=numb
// numb-=numb2
// }
// console.log(fact)



// Leasson 2

//fibonacci # 147 shkola programmista 
// start here
// function fibonacci(num){
// 	let result = [0,1]
// 	for(let i = 2;i<=num;i++){
// 		let prevNum1 = result[i - 1]
// 		let prevNum2 = result[i - 2]
// 		result.push(prevNum1 + prevNum2)
// 	}
// 	// console.log(result)
// 	return result[num]
// }
// console.log(fibonacci(50))


// //fibonacci # 147 shkola programmista 
// start here

// let fib1 = 1
// let fib2 = 1
// let k = prompt(`введите число фиб`)
// for(let i=2;i<k;i++){
// 	let index = fib1
// 	fib1 = fib2
// 	fib2 = index + fib1
// }
// console.log(fib2)

// console.log(fib1)
// fib1 всегда меньше чем fib2


//recursia
// let prmt = prompt(`число`)
// function fibonacci(n){
// 	if(n<=1){
// return n
// 	}
// 	else{
// 		return fibonacci(n - 1) + fibonacci(n - 1)
// 	}
// }
// console.log(fibonacci(prmt))



// Слишком длинные слова
// let n = prompt(`введите колличество слово`)
// for(let i = 0;i < n; i++){
// 	let pr = prompt(`введите слово`)
// 	if(pr.length > 10){
// 		console.log(pr[0] + (pr.length-2) + (pr[pr.length-1]))
// 	}
// 	else{
// 		console.log(pr)
// 	}
// }

// A. Петя и строки
// let a = prompt(`введите число`).toLowerCase()
// let b = prompt(`введите число`).toLowerCase()
// if(a>b){
// 	console.log(1)
// }
// else if(a<b){
// 	console.log(-1)
// }
// else{
// 	console.log(0)
// }




// A. Bit++
// let n = Number(prompt("введите кол число"))
// let x = 0
// for(let i = 0;i<n;i++){
// 	let s = prompt(`Введите опер`)
// 	if(s == `X++` || s == `++X`){
// 		x+=1
// 	}
// 	else if(s == `X--` || s == `--X`) {
// 		x-=1	
// 	}
// }
// console.log(x) 



// арбуз
// let n = prompt(`введите вес арбуза`)
// if(n>2 && n%2==0){
// 	console.log(`yes`)
// }
// else{
// 	console.log(`no`)
// }

// 22.апреля
// lesson 3
// Числа Фибоначчи - 3
// let n = Number(prompt(`введите число`))
// let m = Number(prompt(`введите второе число`))

// let fib1 =1 
// let fib2 =1 

// for(let i = 2;i< n;i++){
// 	let index =fib1
// 	fib1 = fib2
// 	fib2 = index + fib1
// }
// console.log(fib2)

// let fib3 =1 
// let fib4 =1 

// for(let i = 2;i< m;i++){
// 	let index =fib3
// 	fib3 = fib4
// 	fib4 = index + fib3
// }
// console.log(fib3)

// while(fib2 != fib4){
// 	if( fib2 > fib4){
// 		fib2 -= fib4
// 	}
// 	else{
// 		fib4 -= fib2
// 	}
// }
// console.log(fib4 )


// 22.04.aprile
// function show(name,age){
// 	console.log(`Hello my name is ${name} im ${age} odler`)
// 	return 2+2
// }
// show(`Vasya`,35)
// let n = show(`Deddi`,25)



// example with Fucntion Fib
// let n = Number(prompt(`введите число`))
// let m = Number(prompt(`введите второе число`))

// function fib(ch){
// 	let fib1 =1 
// 	let fib2 =1 
	
// 	for(let i = 2;i< n;i++){
// 		let index =fib1
// 		fib1 = fib2
// 		fib2 = index + fib1
// 	}
// 	return fib2
// }
// let nn = fib(n)
// let mm = fib(m)

// while(nn != mm){
// 	if( nn > mm){
// 		nn -= mm
// 	}
// 	else{
// 		nn -= mm
// 	}
// }
// console.log(nn)
// console.log(mm)
// без разницы mm или nn



// 23.04.aprile
// practices at Home
// Fibonacci + while + if

// let a = 1
// let b = 1
// let pr = prompt(`     `)
// let i = 2
// while(b < pr){
// 	let merge = a 
// 	a = b
// 	b = merge + a
// 	i++
// }
// 	// console.log(i)
// 	// console.log(1)
	
// 	if(b==pr){
// 		console.log(i)
// 		console.log(1)
// 	}
// 	if(b!=pr){
// 	console.log(0)
// 	}


// 24.04.aprile
// Home work
// krot
// let krot = `s;;upimrrfod;pbr`
// let krot2 =`allyouneedislove`
// let al = String(alert(krot))
// let al2 = String(alert(krot2))

// let pr = prompt(`PISHI`)
// let a = `ab1`
// let b = `ab2`
// let ax = `ab3`

// function f (){
// 	if (a == pr) {
// 		alert(`NO`)
// 	} 
// 	if(b == pr) {
// 		alert(`YES`)
// 	}
// 	if(ax == pr){
// 		alert(`NO`)
// 	}
// }
// f()




// 25.04 aprile
// Class work
// let mass = [`Azamat,Bek`]
// console.log(mass)
// mass.push(`Azim`)
// // в конец 
// console.log(mass)
// mass.unshift(`Azim`)
// // в начанло
// console.log(mass)
// mass.pop()
// console.log(mass)
// // удаляет с конца
// mass.shift()
// console.log(mass)
// // удаляет с начала

// ['Azamat,Bek']0: "Azamat,Bek"length: 1[[Prototype]]: Array(0)
// ['Azamat,Bek', 'Azim']0: "Azamat,Bek"length: 1[[Prototype]]: Array(0)
// ['Azim', 'Azamat,Bek', 'Azim']0: "Azamat,Bek"length: 1[[Prototype]]: Array(0)
// ['Azim', 'Azamat,Bek']
// ['Azamat,Bek']

// // 25.04 aprile
// Class work
// перебор массива
// let arr = [`Azamat`,`Bek`,`Aziz`,`Azim`,`Aminhan`]
// for(let i = 0;i < arr.length;i++){
// 	console.log(arr[i])
// }

// додулать 
// car Object{}
// let car = {
// 	mark:`Mersedes`,
// 	color:`Black`,
// 	year:2015,
// 	// age:,
// 	price:20000,
// 	age:function(){
// 	return 2022 - car.year
// 	},
// currentPrice:15800,
// }
// console.log(car)
// console.log(car.age())
// console.log(car.currentPrice)


// 27.04.aprile
// DOM - Document Object Model
// class work

// let title= document.querySelector(`h1`)
// let a =document.querySelector(`a`)
// let btn = document.querySelector(`#push`)
// let body =document.querySelector(`body`)
// let removeButton = document.querySelector(`#remove`)

// a.classList = `a`
// a.style.color = `blue`
// title.textContent = `from JS`
// title.style.color = `red`
// title.classList = `fon`
// btn.addEventListener(`click`,function(){
// 	body.style.backgroundImage = `url(https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg)`
// })

