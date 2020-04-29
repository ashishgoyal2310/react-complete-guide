import React from 'react';
import Person from './Person'
import ErrorBoundary from '../ErrorBoundary'

const Persons = (props) => {
    let persons = null;
    if (props.showPersons) {
        persons = props.persons.map(
            (personDct, index) => <ErrorBoundary key={personDct.id}>
                                    <Person
                                        name={personDct.name}
                                        age={personDct.age}
                                        onClick={() => props.onClick(index)}
                                        onChange={(event) => props.onChange(event, personDct.id)}/>
                                </ErrorBoundary>)
    }
    return persons
}

export default Persons