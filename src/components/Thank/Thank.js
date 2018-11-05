import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thank extends Component {

    resetState = (event) =>{
        event.preventDefault();
        this.props.dispatch({ type: 'RESET_STATE'})
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
            <p> your feedback has been submitted </p>
             <button onClick={this.resetState}> LEAVE NEW FEEDBACK </button>
             </div>
        );
    }
}

export default connect()( Thank );