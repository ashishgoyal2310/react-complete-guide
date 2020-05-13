import React, { Component } from 'react';

import Auxiliary from './Auxiliary'
import Modal from '../components/UI/Modal'


const withErorHandler = ( WrapperComponent, axios ) => {
    return class extends Component {
        state = {
            error: ''
        };

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: '' })
                return req
            })
            axios.interceptors.response.use(response => {
                return response
            }, error => {
                this.setState({ error: error })
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