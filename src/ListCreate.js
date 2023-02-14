import { useReducer } from "react";
import { listCreateReducer } from "./reducers/listCreateReducer";


function ListCreate({handleCreate}) {
  const [state, dispatch] = useReducer(listCreateReducer, {
    listTitle: '',
    newListItemTitle: '',
    newListItems: [],
  });

  const onTitleChange = (event) => {
    dispatch({type: 'setListTitle', payload: event.target.value});
  };

  const onItemChange = (event) => {
    dispatch({type: 'setListItemTitle', payload: event.target.value});
  };

  const handleAddItem = () => {
    if (state.newListItemTitle === '') {
      alert('Item text can not be empty');
      return;
    }

    dispatch({type: 'setListItems', payload: state.newListItemTitle});
    dispatch({type: 'setListItemTitle', payload: ''});
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (state.newListItems.length === 0) {
      alert('At least one todo item must be present');
      return;
    }

    handleCreate({
      title: state.listTitle,
      items: state.newListItems
    });

    dispatch({type: 'setListItemTitle', payload: ''});
    dispatch({type: 'setListItems', payload: []});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={state.listTitle} onChange={onTitleChange}></input>
        <br/>
        {state.newListItems.map((item, index) => (<span key={'newListItem' + index}>item {index + 1}: {item.value}</span>))}
        <br/>
        <input value={state.newListItemTitle} onChange={onItemChange}></input>
        <span onClick={handleAddItem}>Add list item</span>
        <br/>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}


export default ListCreate;