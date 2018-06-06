export const addItem = (title, year, _console) => ({
    type: 'ADD_ITEM',
    title,
    year,
    _console
})

export const loadItemsSuccess = (items) =>({
    type: 'LOAD_ITEMS',
    items
})


export const loadItems = () => {

    fetch('http://localhost:3004/games')
    .then(response => {
        return response.json();
    })
    .then(json => {
        //loadItemsSuccess(json);
    });
}
