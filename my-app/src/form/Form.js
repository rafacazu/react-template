import React from 'react';


class Form extends React.Component{

    constructor(){
        super();
        this.state = {
            title: null,
            year: null,
            console: null
        }

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e){
        e.preventDefault()
        const content = {"title":"doom", "year": "2017", "console": "ps4"}

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
        console.log('...submiting form', this.state.title);
        return(
            <div>
                <form>
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="year" placeholder="Year" />
                    <input type="text" name="console" placeholder="Console" />
                    <input type="submit" value="Add" onClick={this.submitForm} /> 
                </form>
                <div>{this.state.title} {this.state.year} {this.state.console} has been added to the list</div>
            </div>
        )
        
    }
}

export default Form;