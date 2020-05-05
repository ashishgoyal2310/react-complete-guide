import React, { Component, useEffect } from 'react';
import classes from './Person.module.css'
import Persons from './Persons'

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js  ] ..useEffect as componentDidMount (pass empty array)');
        setTimeout(() => {
            alert('[Cockpit.js  ] as componentDidMount.');
        }, 1000);
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js  ] ..useEffect as componentDidUpdate');
    }, [props.persons]);

    useEffect(() => {
        return () => {
            console.log('[Cockpit.js  ] ..useEffect as componentWillUnmount (pass empty array use return method)')
        }
    }, []);

    const paraMgmtCss = []
    if (props.persons.length <= 2) {
        paraMgmtCss.push(classes.txtred)
    }

    if (props.persons.length <= 1) {
        paraMgmtCss.push(classes.txtbold)
    }

    const buttonToggleCss = [classes.buttonToggle]
    if (props.showPersons) {
        buttonToggleCss.push(classes.btnred)
    }

    return (
        <React.Fragment>
            <p className={paraMgmtCss.join(' ')}>Person Management</p>
            <button className={buttonToggleCss.join(' ')}
                onClick={props.onClick}>Toggle Person
            </button>
        </React.Fragment>
    );
}

class PersonApp extends Component {
    state = {
        persons: [
            { id: '1', name: 'Ashu', age: '25'},
            { id: '2', name: 'Rishu', age: '26'},
            { id: '3', name: 'Neha', age: '26'},
        ],
        showPersons: false,
    }

    // componentWillMount() {
    //     console.log('[PersonApp.js] .....componentWillMount');
    // }

    componentDidMount() {
        console.log('[PersonApp.js] .....componentDidMount');
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('[PersonApp.js] .....componentWillReceiveProps', nextProps);
    // }

    static getDerivedStateFromProps(props, state) {
        console.log('[PersonApp.js] .....getDerivedStateFromProps')
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[PersonApp.js] .....shouldComponentUpdate');
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('[PersonApp.js] .....componentWillUpdate');
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[PersonApp.js] .....getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[PersonApp.js] .....componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[PersonApp.js] .....componentWillUnmount');
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
        this.setState((prevState, props) => {
            return {
                showPersons: !prevState.showPersons
            };
        });
    }

    render() {
        console.log('[PersonApp.js] ........rendering');

        return (
            <React.Fragment>
                <Cockpit
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    onClick={this.togglePersonHandler} />
                {
                    this.state.showPersons ?
                    <Persons
                        persons={this.state.persons}
                        onClick={this.deletePersonHandler}
                        onChange={this.inputChangeHandler} /> : null
                }
            </React.Fragment>
        );
    }
}

export default PersonApp;