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
                    <div className="form-group">
                        <input className="form-control" type="text" name="title" placeholder="Title" value={this.props.value.title} onChange={this.props.onChange}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="year" placeholder="Year" value={this.props.value.year} onChange={this.props.onChange} />
                    </div>

                    <div className="form-group">
                        <input className="form-control" type="text" name="console" placeholder="Console" value={this.props.value.console} onChange={this.props.onChange}/>
                    </div>

                   
                    <input type="hidden" name="id" placeholder="Id" value={this.props.value.id} onChange={this.props.onChange}/>
                    <input type="submit" value="Save" className="btn btn-primary mb-2" onClick={this.props.onClick} />
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