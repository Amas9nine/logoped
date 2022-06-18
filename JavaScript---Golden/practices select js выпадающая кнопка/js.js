const $selectBtn = document.querySelector(`.dropbtn`)
const $drowdownBlock = document.querySelector(`#myDropdown`)


const firstDropDown = []


$selectBtn.addEventListener(`click`, dropdownFucn )
function dropdownFucn(){
$drowdownBlock.classList.toggle(`show`)
}

$drowdownBlock.addEventListener(`click`, drowdownBlockFUNC)
function drowdownBlockFUNC (event){

const target=event.target

const isInClude = firstDropDown.includes(target.innerHTML)

if(!isInClude){
	target.classList.add(`selected`)
	firstDropDown.push(target.innerHTML)
}
console.log(firstDropDown)
$selectBtn.innerHTML = `выбрано + ${firstDropDown.length}`
}