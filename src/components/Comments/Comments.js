import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    render() {
        return (
        
            <h2>How are you comments today?</h2>

        );
    }
}

export default connect()( Comments );