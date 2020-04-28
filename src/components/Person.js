import React, { Component } from 'react';
import classes from './Person.module.css'


export const Person = (props) => {
    return (
        <div className={classes.personCard}>
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
        let persons = null;
        const buttonToggleCss = [classes.buttonToggle]
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
            buttonToggleCss.push(classes.red)
        }

        return (
            <React.Fragment>
                <button class={buttonToggleCss.join(' ')} isShown={this.state.showPersons}
                    onClick={this.togglePersonHandler}>Toggle Person
                </button>
                {persons}
            </React.Fragment>
        );
    }
}
