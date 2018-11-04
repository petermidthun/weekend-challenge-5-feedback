import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    render() {
        return (
        
            <h2>How are you feeling today?</h2>

        );
    }
}

export default connect()( Feeling );