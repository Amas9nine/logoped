let $btn=document.querySelector(`#push`)
let $body=document.querySelector(`body`)


let i = 0
	$btn.addEventListener(`click`,function(){
		if(i==3){
			i=0
			$body.classList.remove(`f${3}`)
		}
		i++
		$body.classList.add(`f${i}`)
		$body.classList.remove(`f${i-1}`)
	})

	