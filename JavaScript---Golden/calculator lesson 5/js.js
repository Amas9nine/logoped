let $n1 = document.querySelector(`#n1`).value
$n1 = parseInt($n1)
let $n2 = document.querySelector(`#n2`).value
$n2 = parseInt($n2)
let result

let $btn = document.querySelector(`#btn`)
let  $out = document.querySelector(`#out`).value

function f (){
	result = $n1 + $n2
	$out.insertAdjacentHTML = result
}
	 $btn.addEventListener(`click`,f)
		 




