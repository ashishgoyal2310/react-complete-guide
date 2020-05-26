import React, { Component } from 'react';
import Person from './Person'
import ErrorBoundary from './ErrorBoundary'

class Persons extends Component {

    render() {
        console.log('[Persons.js  ] .....rendering');
        const props = this.props;

        return props.persons.map(
            (personDct, index) => <ErrorBoundary key={personDct.id}>
                                    <Person
                                        name={personDct.name}
                                        age={personDct.age}
                                        onClick={() => this.props.onClick(index)}
                                        onChange={(event) => this.props.onChange(event, personDct.id)}/>
                                </ErrorBoundary>)
    }
}

export default Persons