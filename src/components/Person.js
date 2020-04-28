import React, { Component } from 'react';
import './Person.css'
import styled from 'styled-components'

const StyledPersonCardDiv = styled.div`
    width: 50%;
    border: 1px solid #eee;
    box-shadow: 0px 2px 3px #ccc;
    margin: 16px auto;
    padding: 16px;

    @media (min-width: 500px) {
        width: 450px;
    }
`

export const Person = (props) => {
    return (
        // <div className="person-card">
        <StyledPersonCardDiv>
            <p className="pointer" onClick={props.onClick}>Hi { props.name }!! Your age is { props.age }</p>
            <input type="text" onChange={props.onChange} value={props.name}/>
        </StyledPersonCardDiv>
        // </div>
    )
}


const StyledButton = styled.button`
    border: 1px solid blue;
    padding: 5px;
    margin: 5px;
    background-color: ${props => {console.log(props); return props.isShown ? 'rgb(155, 0, 0)' : 'rgb(0, 155, 0)'}};
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.isShown ? 'rgb(255, 0, 0)' : 'rgb(0, 255, 0)'};
    }
`

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
                <StyledButton isShown={this.state.showPersons}
                    onClick={this.togglePersonHandler}>Toggle Person
                </StyledButton>
                {persons}
            </React.Fragment>
        );
    }
}
