import React, { Component } from 'react';
import { connect } from 'react-redux';

// const feeling = {feeling: ''};

class Feeling extends Component {

    state = {feeling: ''}

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('entering handlesubmit in Feeling')

        this.props.dispatch({ type: 'ADD_FEEDBACK_FEELING', payload: this.state})
        this.setState({feeling: ''});
        this.props.history.push('/2')
    }



    handleChange = (event) => {
        this.setState({feeling: event.target.value});
    }

    render() {
        return (
               <form onSubmit={this.handleSubmit}>
               <h2>On a scale of 1 to 5, how are you feeling today?</h2>
                <input onChange={this.handleChange} placeholder="Enter a number" />
                <input type="submit" value="Submit" />
            </form>
            

        );
    }
}

export default connect()( Feeling );