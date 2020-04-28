import React, { Component } from 'react';
import './Person.css'

export const Person = (props) => {
    return (
        <div className="person-card">
            <p className="pointer" onClick={props.onClick}>Hi { props.name }!! Your age is { props.age }</p>
            <input type="text" onChange={props.onChange} value={props.name}/>
        </div>
    )
}

export class Persons extends Component {
    state = {
        persons: [
            { id: '1', name: 'Ashu', age: '25'},
            { id: '2', name: 'Rishu', age: '26'},
            { id: '3', name: 'Neha', age: '26'},
        ],
        showPersons: false,
    }

    inputChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((dct) => { return dct.id === id })
        const newPersons = [...this.state.persons];
        newPersons[personIndex].name = event.target.value;
        this.setState({ persons: newPersons });
    }

    deletePersonHandler = (index) => {
        const persons = this.state.persons.slice(); // to create new copy use slice() without any argument
        persons.splice(index, 1);
        this.setState({ persons: persons });
    }

    togglePersonHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }

    render() {
        const btnStyle = {
            border: '1px solid blue',
            boxShadow: '0px 0px 3px 1px blue',
            padding: '5px',
            margin: '5px',
            backgroundColor: '#fff',
            cursor: 'pointer',
        }

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((personDct, index) =>
                        <Person key={personDct.id}
                            name={personDct.name} age={personDct.age}
                            onClick={() => this.deletePersonHandler(index)}
                            onChange={(event) => this.inputChangeHandler(event, personDct.id)}
                        />)
                    }
                </div>
            )
        }

        return (
            <React.Fragment>
                <button
                    style={btnStyle}
                    onClick={this.togglePersonHandler}>Toggle Person
                </button>
                {persons}
            </React.Fragment>
        );
    }
}
