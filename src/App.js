import ListCreate from "./ListCreate";

function App() {
  const onCreate = (data) => {
    console.log('new todo list');
    console.log(data);
  }

  return <ListCreate handleCreate={onCreate}/>
}

export default App;