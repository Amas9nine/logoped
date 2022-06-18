 let obj = { }
 let arr = [ ]
 
//  

 let $form = document.querySelector(`form`)
 $form.submit.addEventListener(`click`,function(event){
	 event.preventDefault( )
obj.name = $form.name.value
obj.phone =	$form.phone.value
obj.email =	$form.email.value
arr.push(obj)
obj = { }
console.log(obj)
 })

// 

let $showListOfUsers = document.querySelector(`#showListOfUsers`)
let $list = document.querySelector(`.list`)
$showListOfUsers.addEventListener(`click`,function(){
	$list.innerHTML = `	`
	for(let i = 0;i<arr.length;i++){
		$list.insertAdjacentHTML(`afterbegin`,
		`
		${arr[i].name}
		${arr[i].phone}
		${arr[i].email}
		`
		)
	}

})