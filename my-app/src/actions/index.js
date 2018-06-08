export const addItem = (title, year, _console) => ({
    type: 'ADD_ITEM',
    title,
    year,
    _console
})


export const loadItems = (items) => ({
    type: 'LOAD_ITEMS',
    items
})