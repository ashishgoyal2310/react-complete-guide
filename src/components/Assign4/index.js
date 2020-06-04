import React, { Component } from 'react';
import { connect } from 'react-redux'

const CounterBtn = (props) => {
    return (
        <button type="button"
            style={{
                'padding': '5px',
                'margin': 'auto 5px',
                'width': '100px',
                'cursor': 'pointer'
            }}
            onClick={ props.clicked }>{ props.name }
        </button>
    );
}

class Assign4Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterHandler = (action) => {
    //     let counterUpdated = 0;
    //     switch (action) {
    //         case 'INC':
    //             counterUpdated = counterUpdated + 1;
    //             break;
    //         case 'DEC':
    //             counterUpdated = counterUpdated - 1;
    //             break;
    //         case 'ADD':
    //             counterUpdated = counterUpdated + 4;
    //             break;
    //         case 'SUB':
    //             counterUpdated = counterUpdated - 4;
    //             break;
    //         default:
    //             break
    //     }
    //     this.setState((prevState, props) => {
    //         return { counter: prevState.counter + counterUpdated }
    //     });
    // }

    render() {
        const propsState = this.props;

        return (
            <div>
                <h1 style={{'backgroundColor': 'salmon'}}>Current Counter: {propsState.ctr}</h1>
                <CounterBtn clicked={propsState.onIncrement} name='INC' />
                <CounterBtn clicked={propsState.onDecrement} name='DEC' />
                <CounterBtn clicked={propsState.onAddition} name='ADD 4' />
                <CounterBtn clicked={propsState.onSubstraction} name='SUB 4' />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INC', value: 1}),
        onDecrement: () => dispatch({type: 'DEC', value: 1}),
        onAddition: () => dispatch({type: 'ADD', value: 4}),
        onSubstraction: () => dispatch({type: 'SUB', value: 4}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assign4Counter);