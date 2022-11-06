import Post from "./Post";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [fail, setFail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("before fetching")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => (res.json()))
      .then((thenTwo) => (setPosts(thenTwo)))
      .catch((handleError) => (setFail(handleError.message)))
      .finally(() => (setIsLoading(false)))
  }, [])


  if (fail) {
    return (
      <h1>{fail}</h1>
    )
  }

  return (
    <>
      <h1>HEADER</h1>
      <hr />
      {isLoading ? (
        <h1>...isLoading...</h1>
      ) : (
        posts.map((item) => (<Post key={item.id} {...item} />))
      )}
    </ >
  )
}

export default Posts;
