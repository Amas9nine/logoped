
const inputClick = ()=>{console.log(`Clicked !!!`)}
const mouseOver = ()=>{console.log(`Mouse Overed !!!`)}
const WriteText = 'WRITE TEXT WWW'
const SayHi = `I LOVE Freedom`

const inp =(<div> 
				<h1>{WriteText}</h1>
				<input type=" hello text " placeholder={WriteText} onClick={inputClick} onMouseEnter={mouseOver}/> 
				<h3>{SayHi}</h3>
				<div>{5+5}</div>
	</div>)
const app = document.getElementById(`App`)

ReactDOM.render(
inp,app	
)