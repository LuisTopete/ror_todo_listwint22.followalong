import TodoShow from './TodoShow';

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <>
    { todos.map(t => 
      <TodoShow
        key={t.id}
        {...t}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    )}
  </>
)

export default TodoList;