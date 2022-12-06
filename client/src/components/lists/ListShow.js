const ListShow = ({ id, title, desc }) => {
  
  return (
    <>
      <h1>{title}</h1>
      <p>{desc}</p>
      <button>Edit</button>
      <button>Delete</button>
      <button>Todos</button>
    </>
  )
}

export default ListShow;