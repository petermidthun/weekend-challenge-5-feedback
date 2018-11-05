import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const emptyState = {comments: ''};

class Comments extends Component {

    state = emptyState;

    bundleData = () => {  //  Bundles the data into a nice object to POST
        let dataObject = {
            feeling: this.props.reduxState.feelingReducer[0],
            understanding: this.props.reduxState.understandingReducer[0],
            support: this.props.reduxState.supportReducer[0],
            comments: this.state.comments
        };
        return dataObject
    }

    postToDatabase = (dataObject) => {
        this.setState(emptyState);
        //  console.log('dataObject: ', dataObject);
        axios({
                method: 'POST',
                url: '/api/feedback',
                data: dataObject
              }).then( (response) => {
                this.props.history.push('/5');
              }).catch ((error) => {
                alert('bad things');
              })
        
    }

    handleSubmit = (event) => {  //  submits data to be bundled and posted
        event.preventDefault();
        this.postToDatabase(this.bundleData());
    }

    handleChange = (event) => {  //  updates input field on change
        this.setState({comments: event.target.value});
    }

    render() {
        return (
        
            <form onSubmit={this.handleSubmit}>
            <h2>Do you have any additional comments?</h2>
             <input onChange={this.handleChange} placeholder="Enter comment" />
             <input type="submit" value="Submit" />
         </form>

        );
    }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect( mapReduxStateToProps )( Comments );


    

        

