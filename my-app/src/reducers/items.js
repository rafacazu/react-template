const games = (state = [], action) => {
    switch (action.type){
        case 'ADD_GAME':
            return [
                ...state,
                {
                    title: action.title,
                    year: action.year,
                    console: action._console
                
                }
            ]
        default:
            return state
        
    }
    
}

export default games