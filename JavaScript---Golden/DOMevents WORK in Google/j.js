 const $btn = document.querySelector(`button`)
 let $imges = document.querySelector(`.imges`)
 let index = 0
$btn.addEventListener(`click`,function(event){
	event.preventDefault()
	$btn.innerHTML = (`U ARE WORKING IN GOOGLE GET MY CONGRATULATIONS `)

	// $imges.insertAdjacentHTML(`beforeend`,
	// `
	// <img src="https://i.pinimg.com/originals/07/be/89/07be892db48f498bb2d11701d3ca7e69.jpg" alt="">

	// `
	// )
	if(index = 5) {
		index=0
	$imges.classList.remove(`f${5}`)	
	}
	index=+1
	$imges.classList.add(`f${index}`)
	$imges.classList.remove(`f${index-1}`)
})

