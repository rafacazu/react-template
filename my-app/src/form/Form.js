import React from 'react';


class Form extends React.Component{

    constructor(props){
        super();
        this.state = {
            title: "",
            year: "",
            console: ""
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleIputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event){
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    submitForm(e){
        e.preventDefault()
        const content = this.state;

        fetch('http://localhost:3004/games?title="doom"',{
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

        // this is saving the data in db.json - Next step is refreshing all the components once the data is saved. For that, I'll add the redux;

    }



    render(){
        console.log('state:', this.state.title, this.state.year, this.state.console );
        return(
            <div>
                <form>
                    <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleIputChange}/>
                    <input type="text" name="year" placeholder="Year" value={this.state.year} onChange={this.handleIputChange} />
                    <input type="text" name="console" placeholder="Console" value={this.state.console} onChange={this.handleIputChange}/>
                    <input type="submit" value="Add" onClick={this.submitForm} /> 
                </form>
            </div>
        )
        
    }
}

export default Form;