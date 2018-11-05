import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {support: ''}

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('entering handlesubmit in Support')
        
        this.props.dispatch({ type: 'ADD_FEEDBACK_SUPPORT', payload: this.state})
        this.setState({support: ''});
        this.props.history.push('/4')
    }

    handleChange = (event) => {
        this.setState({support: event.target.value});
    }
    render() {
        return (
        
            <form onSubmit={this.handleSubmit}>
            <h2>On a scale of 1 to 5, how well do you feel you are being supported?</h2>
             <input onChange={this.handleChange} placeholder="Enter a number" />
             <input type="submit" value="Submit" />
         </form>

        );
    }
}

export default connect()( Support );