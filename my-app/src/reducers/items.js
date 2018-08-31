const items = (state = [], action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return action;

        case 'EDIT_ITEM':
            return action;

        case 'LOAD_ITEMS':  
            return action.items
        
        case 'LOAD_DETAILS':
            return action;
            
        default:
            return state
    }
    
}

export default items