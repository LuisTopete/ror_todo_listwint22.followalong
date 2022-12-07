import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, id, title, rating, complete, price, updateTodo, setEdit }) => {
  const [todo, setTodo] = useState({ title: '', rating: 0, complete: false, price: null })

  useEffect( () => {
    if (id) {
      setTodo({ title, rating, complete, price })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTodo(id, todo)
      setEdit(false)
    } else {
      addTodo(todo)
    }
    setTodo({ title: '', rating: 0, complete: false, price: null })
  }

  return (
    <>
      <h1>{id ? 'Update' : 'Create'} Todo</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
          name='title'
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          required
        />
        <label>Rating</label>
        <input 
          type='number'
          name='rating'
          value={todo.rating}
          onChange={(e) => setTodo({ ...todo, rating: parseInt(e.target.value) })}
          required
          max='5'
          min='0'
        />
        <label>Complete</label>
        <input 
          type='checkbox'
          checked={todo.complete}
          name='complete'
          value={todo.complete}
          onChange={(e) => setTodo({ ...todo, complete: e.target.checked })}
        />
        <label>Price</label>
        <input 
          type='number'
          step="0.01"
          name='price'
          value={todo.price}
          onChange={(e) => setTodo({ ...todo, price: parseFloat(e.target.value) })}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TodoForm;