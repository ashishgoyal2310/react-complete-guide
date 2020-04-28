import React, { Component } from 'react';
import './Assign2.css'
import Validation from './Validation'
import Char from './Char'

class Assign2 extends Component {
    state = {
        value: '',
    }

    inputChangeHandler = (event) => {
        this.setState({value: event.target.value});
    }

    deleteCharHandler = (index) => {
        const valArray = this.state.value.split('');
        valArray.splice(index, 1);

        this.setState({value: valArray.join('')});
    }

    render() {
        const { value } = this.state

        const chars = (
            <div>
                {value.split('').map((character, index) => <Char key={index} character={character} onClick={() => this.deleteCharHandler(index)} />)}
            </div>
        )

        return (
            <div className="assign2">
                <h1>Assignment2</h1>
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)</li>
                    <li>Create a new component (=> ValidationComponent) which received the text length as a props</li>
                    <li>Inside the ValidationComponent, either output "Text too short" ot "Text long enough" depending on the text length (e.g. take 5 as a minimum lenght)</li>
                    <li>Create another component (=> CharCompnent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black, background-color: olive, color: white)</li>
                    <li>Render a list of CharComponent where each CharCompnent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                    <li>When you click a CharCompnent, it should be remove from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

                <input type="text" onChange={this.inputChangeHandler} value={value} />
                <span> (Input length: {value.length}) </span>
                <Validation inputLength={value.length} />
                {chars}
            </div>
        );
    }
}

export default Assign2;