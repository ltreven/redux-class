
// Action Creator

export const addItem = item => {
    return {
      type: "ADD_ITEM",
      payload: {
        ...item
      }
    }
}


export const loadItems = item => {
  return {
    type: "LOAD_ITEMS",
    payload: {
      
    }
  }
}