export function listCreateReducer(state, action) {
  switch(action.type) {
    case 'setListTitle':
      return {...state, listTitle: action.payload}
    case 'setListItemTitle':
      return {...state, newListItemTitle: action.payload}
    case 'setListItems':
      const updatedList = state.newListItems.concat([{value: action.payload}]);
      return {...state, newListItems: updatedList}
    default: 
      throw new Error(`No such an action type '${action.type}' for listCreateReducer`);
  }
}