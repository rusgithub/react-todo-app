import TodoList from "./TodoList";

function TodosList({todos}) {
  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        {todos.map((todoList, todoListIndex) => <TodoList todoList={todoList} key={'todoList' + todoListIndex}/>)}
      </form>
    </div>
  )
}

export default TodosList;