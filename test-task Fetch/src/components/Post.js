function Post(props) {
  const { id, name, username, email } = props
  console.log(props);
  return (
    <div className="square">
      <div>{id}</div>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
    </div>
  )
}

export default Post;
