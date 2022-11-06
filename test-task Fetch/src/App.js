// import { useEffect, useState } from "react";
import './App.css';
import Posts from "./components/Posts";

// async function AsyncAwait() {
//   let url = await fetch("https://api.opensea.io/api/v1/assets?format=json");
//   let content = await url.json();
//   // console.log(content);
//   console.log(content);
//   for (const key in content) {
//     console.log(content[key])
//     console.log(key)

//   }
// }
// AsyncAwait();
// 



function App() {
  return (<h1 className="App">
    <Posts />
  </h1>
  )




  // const url = "https://jsonplaceholder.typicode.com/todos/2"

  // const [todo, setTodo] = useState(null);

  // useEffect(() => {
  //   console.log("Callback already called RERENDERING");
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setTodo(json))
  // }, [])

  // console.log("App rendered");
  // console.log(todo);
  // return (
  //   <div className="App">
  //     {todo && <h1>{todo.title}</h1>}
  //   </div>
  // );
}

export default App;

/* <img src={test.assets[0].image_url} alt="i" /> */