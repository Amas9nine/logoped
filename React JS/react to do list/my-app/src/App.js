// Удаление как добаление
// при клике сделать фолс в тру 
import './App.css';
import { useState } from 'react';
import Header from "./components/header/Header"
import Footer from './components/footer/footer'
import CreatTodo from './components/creat-todo/CreatTodo'

function App() {
  
  const todoArr = [
    {id:1, text: "Купи сахар !!!" ,status:false},
    {id:2, text: "Купи соль !!!" ,status:true},
]
const [state,setState] = useState(todoArr)

const deleteTodo =(id)=>{

}

  return (
    <div className="App">
      <Header state={state} />
      <div className='todoBody'>
        <CreatTodo state={state} setState={setState} />
        
        <div className='todoItems'>
          {
          /* <Footer checked={true} text='Aziz'  age='12' months='december'/> */
          }
          {
            state.map((item) => 
            <Footer 
            text={item.text} 
            checked={item.status}
            id={item.id}
            onDelete ={deleteTodo}
             />)
           
          }
        
          
        </div>


      </div>
    </div>



  );
}

export default App;
// onSubmit