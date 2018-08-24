export const addItem = (item) => ({
    type: 'ADD_ITEM',
    item: item
})

export const editItem = (item) => ({
    type: 'EDIT_ITEM',
    item: item
})


export const loadItems = (items) => ({
    type: 'LOAD_ITEMS',
    items
})

export const loadDetails = (item) => ({
  type: 'LOAD_DETAILS',
  item : item
})