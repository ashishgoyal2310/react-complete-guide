import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../reduxStores/reducers/actions'

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

    render() {
        const propsState = this.props;

        return (
            <div>
                <h1 style={{'backgroundColor': 'salmon'}}>Current Counter: {propsState.ctr}</h1>
                <CounterBtn clicked={propsState.onIncrement} name='INC' />
                <CounterBtn clicked={propsState.onDecrement} name='DEC' />
                <CounterBtn clicked={propsState.onAddition} name='ADD 4' />
                <CounterBtn clicked={propsState.onSubstraction} name='SUB 4' />
                <CounterBtn clicked={propsState.onShowResult} name='RESULTS' />
                <ul>
                    { propsState.results.map((resultDct) => (
                        <li key={ resultDct.id }
                            title='Click Me'
                            style={{'backgroundColor': '#ee9d44', 'cursor': 'pointer', 'width': '50%', 'margin': '3px auto'}}
                            onClick={() => propsState.onRemoveResult(resultDct.id)}>
                            { resultDct.value }
                        </li>
                    )) }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.assign4.counter,
        results: state.assign4.counterResult
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: actionTypes.INCREMENT, value: 1}),
        onDecrement: () => dispatch({type: actionTypes.DECREMENT, value: 1}),
        onAddition: () => dispatch({type: actionTypes.ADDITION, value: 4}),
        onSubstraction: () => dispatch({type: actionTypes.SUBSTRACTION, value: 4}),
        onShowResult: () => dispatch({type: actionTypes.SHOW_RESULTS}),
        onRemoveResult: (id) => dispatch({type: actionTypes.REMOVE_RESULT, resultId: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assign4Counter);