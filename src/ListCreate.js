import { useState } from "react";

function ListCreate({handleCreate}) {
  const [listTitle, setListTitle] = useState('');
  const [newListItemTitle, setListItemTitle] = useState('');
  const [newListItems, setListItems] = useState([]);

  const onTitleChange = (event) => {
    setListTitle(event.target.value);
  };

  const onItemChange = (event) => {
    setListItemTitle(event.target.value);
  };

  const handleAddItem = () => {
    if (newListItemTitle === '') {
      alert('Item text can not be empty');
      return;
    }

    const updatedList = newListItems.concat([{value: newListItemTitle}]);
    setListItems(updatedList);
    setListItemTitle('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newListItems.length === 0) {
      alert('At least one todo item must be present');
      return;
    }

    handleCreate({
      title: listTitle,
      items: newListItems
    });

    setListItemTitle('');
    setListItems([]);

    alert('Todo item created! (see console.log)');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={listTitle} onChange={onTitleChange}></input>
        <br/>
        {newListItems.map((item, index) => (<span key={'newListItem' + index}>item {index + 1}: {item.value}</span>))}
        <br/>
        <input value={newListItemTitle} onChange={onItemChange}></input>
        <span onClick={handleAddItem}>Add list item</span>
        <br/>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}


export default ListCreate;