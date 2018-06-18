const items = (state = [], action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'LOAD_ITEMS':  
            return action.items

        default:
            return state
        
    }
    
}

export default items