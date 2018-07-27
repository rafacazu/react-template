import React from 'react';
import PropTypes from 'prop-types';


class Form extends React.Component{

    constructor(props){
        super();
        this.state = {}
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" name="title" placeholder="Title" value={this.props.value.title} onChange={this.props.onChange}/>
                    <input type="text" name="year" placeholder="Year" value={this.props.value.year} onChange={this.props.onChange} />
                    <input type="text" name="console" placeholder="Console" value={this.props.value.console} onChange={this.props.onChange}/>
                    <input type="text" name="id" placeholder="Id" value={this.props.value.id} onChange={this.props.onChange}/>
                    <input type="submit" value="Add" onClick={this.props.onClick} />
                </form> 
            </div>
        )
        
    }
}

Form.propTypes = {
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.object.isRequired
}

export default Form;