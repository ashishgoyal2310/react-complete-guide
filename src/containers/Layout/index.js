import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar'
import Sidedrawer from '../../components/Navigation/Sidedrawer'

class Layout extends Component {
    state = {
        showSidedrawer: false
    }

    toggleSidedrawerHandler = () => {
        this.setState(( prevState, props ) => {
            return { showSidedrawer: !prevState.showSidedrawer }
        })
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar toggleSidedrawer={this.toggleSidedrawerHandler} />
                <Sidedrawer show={this.state.showSidedrawer} toggleSidedrawer={this.toggleSidedrawerHandler} />
                <main>
                    { this.props.children }
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;