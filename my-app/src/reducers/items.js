const items = (state = [], action) => {
    switch (action.type){
        case 'ADD_ITEM':

            var content = {title: action.title, year: action.year, console: action.console}

            fetch('http://localhost:3004/games',{
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(content)
            })
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json);
            });
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

export default items