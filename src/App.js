import { useEffect, useState } from "react";
import ListCreate from "./ListCreate";
import TodosList from "./TodosList";
import axios from "axios";
import { mainConfig } from "./config";

const LIST_URI = 'list';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`${mainConfig.api.url}/${LIST_URI}`).then(response => {
      setTodos(response.data);
    }).catch(error => {
      console.log(error);
      alert('request error');
    });
  }, []);

  const onCreate = (data) => {
    axios.post(`${mainConfig.api.url}/${LIST_URI}`, data).then(response => {
      setTodos(todos.concat(response.data));
    }).catch(error => {
      console.log(error);
      alert('request error');
    });
  }

  return (
    <div>
      <ListCreate handleCreate={onCreate}/>
      {todos.length > 0 && <TodosList todos={todos}/>}
    </div>
  )
}

export default App;