import React, { useState } from "react";


//  check !
function App() {
	const [counter, setCounter] = useState(()=>{
return compukter()
	})
// или проста убрать скобки вызова у compukter 
function compukter(){
	console.log('randomize')
	return Math.trunc( Math.random() * 200)
}
// +
	function increment(){
		setCounter((previousValue) => {
			return (previousValue + 1)
		})
		setCounter((previos) => {
			return (previos + 1)
		})
	}
// -
	function decrement() {
		setCounter((argumentMinus) => {
			return (argumentMinus - 1)
		})
		setCounter((minus) => {
			return (minus - 1)
		})
	}

	return (
		<div>
			<h1>Счетчик:: {counter}</h1>
			<button onClick={increment}>Добавить</button>
			<button onClick={decrement}>Убрать</button>
		</div>
	)
}
export default App;