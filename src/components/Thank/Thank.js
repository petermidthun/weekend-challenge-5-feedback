import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thank extends Component {

    render() {
        return (
        
            <h2>Your answers have been posted to the database</h2>

        );
    }
}

export default connect()( Thank );