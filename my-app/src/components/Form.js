import React from 'react';


class Form extends React.Component{

    constructor(props){
        super();
        this.state = {
            title: "",
            year: "",
            console: ""
        }
        
    }

    render(){
        //console.log(this.props.test);
        return(
            <div>
                <form>
                    <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.props.onChange}/>
                    <input type="text" name="year" placeholder="Year" value={this.state.year} onChange={this.props.onChange} />
                    <input type="text" name="console" placeholder="Console" value={this.state.console} onChange={this.props.onChange}/>
                    <input type="submit" value="Add" onClick={this.props.onClick} />
                </form>
            </div>
        )
        
    }
}

export default Form;