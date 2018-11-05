import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = {understanding: ''}

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('entering handlesubmit in Understanding')
        
        this.props.dispatch({ type: 'ADD_FEEDBACK_UNDERSTANDING', payload: this.state})
        this.setState({understanding: ''});
        this.props.history.push('/3')
    }

    handleChange = (event) => {
        this.setState({understanding: event.target.value});
    }

    render() {
        return (
        
        <form onSubmit={this.handleSubmit}>
            <h2>On a scale of 1 to 5, how well are you understanding the content?</h2>
             <input onChange={this.handleChange} placeholder="Enter a number" />
             <input type="submit" value="Next" />
         </form>
         
        );
    }
}

export default connect()( Understanding );
