import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Auxiliary from '../../hoc/Auxiliary'
import Toolbar from '../../components/Navigation/Toolbar'
import Sidedrawer from '../../components/Navigation/Sidedrawer'
import BurgerBuilder from '../BurgerBuilder'
import Checkout from '../Checkout'

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
        // console.log('[Layout.js] rendering...', this.props);
        const baseUrlLayout = this.props.match.path;

        return (
            <Auxiliary>
                <Toolbar
                    baseUrl={baseUrlLayout}
                    toggleSidedrawer={this.toggleSidedrawerHandler} />
                <Sidedrawer
                    baseUrl={baseUrlLayout}
                    show={this.state.showSidedrawer}
                    toggleSidedrawer={this.toggleSidedrawerHandler} />
                <main>
                    {/* { this.props.children } */}
                    <Switch>
                        <Route path={baseUrlLayout + "/checkout"} component={Checkout} />
                        <Route path={baseUrlLayout + "/orders"} render={() => <h1>Order list<p>Order 1</p><p>Order 2</p></h1>} />
                        <Route path={baseUrlLayout} component={BurgerBuilder} />
                    </Switch>
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;