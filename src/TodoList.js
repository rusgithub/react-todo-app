import { useState } from "react";

function TodoList({todoList}) {
  const [isEditMode, setEditMode] = useState(false);

  const listCurrentAction = isEditMode 
    ? <button type='submit'>Save</button> 
    : <span onClick={() => setEditMode(true)}>(Edit)</span>;

  return (
    <div>
      <span>{todoList.title}</span>
      <br/>
      {todoList.items.map((item, todoItemIndex) => (<span key={'todoItem' + todoItemIndex}>item {todoItemIndex + 1}: {item.value}</span>))}
      <br/>
      {listCurrentAction}
    </div>
  )
}

export default TodoList;