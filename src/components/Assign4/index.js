import React, { Component } from 'react';

const CounterBtn = (props) => {
    return (
        <button
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

class CounterRedux extends Component {
    state = {
        counter: 0
    }

    counterHandler = (action) => {
        let counterUpdated = 0;
        switch (action) {
            case 'INC':
                counterUpdated = counterUpdated + 1;
                break;
            case 'DEC':
                counterUpdated = counterUpdated - 1;
                break;
            case 'ADD':
                counterUpdated = counterUpdated + 4;
                break;
            case 'SUB':
                counterUpdated = counterUpdated - 4;
                break;
            default:
                break
        }
        this.setState((prevState, props) => {
            return { counter: prevState.counter + counterUpdated }
        });
    }

    render() {
        return (
            <div>
                <h1 style={{'backgroundColor': 'salmon'}}>Current Counter: {this.state.counter}</h1>
                <CounterBtn clicked={() => this.counterHandler('INC')} name='INC' />
                <CounterBtn clicked={() => this.counterHandler('DEC')} name='DEC' />
                <CounterBtn clicked={() => this.counterHandler('ADD')} name='ADD 4' />
                <CounterBtn clicked={() => this.counterHandler('SUB')} name='SUB 4' />
            </div>
        );
    }
}

export default CounterRedux;