import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/api/feedback') 
        .then( ( response) =>{
            console.log("response to get: ", response);
          this.props.dispatch({type: 'SET_FEEDBACK_FROM_DATABASE', payload: response.data });
        })
        .catch (( error) => {
          alert('bad stuff')
        })
    }

    deleteFeedback = (id) => {
        //eslint-disable-next-line
        if (confirm("Are you sure you want to delete this employee")) {

                axios({
                  method:  'DELETE',
                  url: `/api/feedback/${id}`
                }).then((response) => {
                  this.getFeedback();
                })
                .catch((error) =>{
                  alert('bad stuff');
                })
              
        } else {
            console.log('no delete');
        }
        
    }

    render() {
        return (
            <div>
                <thead>
                    <tr>
                        <td><h3>Feeling</h3></td>
                        <td><h3>Understanding</h3></td>
                        <td><h3>Support</h3></td>
                        <td><h3>Comments</h3></td>
                        <td><h3>Delete</h3></td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxState.adminReducer.map(feedback => (
                        <tr key={feedback.id}>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td>
                                <button onClick={() => {
                                    this.props.dispatch({ type: 'DELETE_FEEDBACK', payload: feedback.id });
                                    this.deleteFeedback(feedback.id);
                                }
                                }>
                                    Delete
            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </div>
        );
    }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect( mapReduxStateToProps )( Admin );