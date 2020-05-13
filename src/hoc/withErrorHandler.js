import React, { Component } from 'react';

import Auxiliary from './Auxiliary'
import Modal from '../components/UI/Modal'


const withErorHandler = ( WrapperComponent, axios ) => {
    return class extends Component {
        state = {
            error: ''
        };

        componentWillMount() {
            axios.interceptors.request.use(req => {
                console.log('[withErorHandler.js] componentWilMount => axios.interceptors.request', req);
                this.setState({ error: '' })
                return req;
            })
            axios.interceptors.response.use(response => {
                console.log('[withErorHandler.js] componentWilMount => axios.interceptors.response', response);
                return response;
            }, error => {
                console.log('[withErorHandler.js] componentWilMount => axios.interceptors.error', error);
                this.setState({ error: error })
                // return error;
            })
        }

        render() {
            return (
                <Auxiliary>
                    <Modal
                        show={ this.state.error }
                        hideOrderSummary={() => { this.setState({ error: '' }) }}>
                        <span style={{ color: "red"}}>{ this.state.error.message }</span>
                    </Modal>
                    <WrapperComponent {...this.props }/>
                </Auxiliary>
            );
        };
    }
    // return (props) => {
    //     return (
    //         <Auxiliary>
    //             <Modal show>
    //                 Something went wrong!!
    //             </Modal>
    //             <WrapperComponent {...props }/>
    //         </Auxiliary>
    //     );
    // }
}

export default withErorHandler;