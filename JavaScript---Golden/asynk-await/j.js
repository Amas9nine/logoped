// async function f() {

// 	let promise = new Promise((resolve, reject) => {
// 	  setTimeout(() => resolve("готово!"), 1000)
// 	});
  
// 	let result = await promise; // будет ждать, пока промис не выполнится (*)
  
// 	alert(result); // "готово!"
//   }
  
//   f();
// старый вариант



// новый вариант через Fetch() 
let $body = document.querySelector(`body`)
async function manager(){
	let response = await fetch('https://jsonplaceholder.typicode.com/posts')
	let data = await response.json()
	return data
}

manager()
.then(list => {
	console.log(list)
	list.forEach(element => {
		$body.insertAdjacentHTML(`afterbegin`,`
		<p>${element.title}</p>
		<p>${element.title}</p>
<p>${element.title}</p>`)
	});

})