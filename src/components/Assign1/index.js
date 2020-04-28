import React, { Component } from 'react';
import './Assign1.css'
import UserInput from './UserInput'
import UserOutput from './UserOutput'

class Assign1 extends Component {
    state = {
        username: 'ashish'
    }

    changeUsernameHandler = (event) => {
        this.setState({username: event.target.value});
    }


    render() {
        return (
            <div className="assign1">
                <h1>Assignment1</h1>
                <ol>
                    <li>Create TWO new components: UserInput and UserOutput</li>
                    <li>UserInput should hold an input element. UserOutput two paragraphs</li>
                    <li>Output multiple UserOutput components in the App component (any paragrapshs texts of your choice)</li>
                    <li>Add state to App component (=> the username) and pass the username to the UserOutput component</li>
                    <li>Add a method to manipulate the state (=> an event-handler method)</li>
                    <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
                    <li>Ensure that the new input entered by the user Overwrites the old username pass to the UserOutput</li>
                    <li>Add two-way-binding to your input (in UserInput) to also display the stating username</li>
                    <li>Add styling to your choice tou your components/ elements in the components -both with inline styles and stylesheet</li>
                </ol>
                <UserInput username={this.state.username} onChange={this.changeUsernameHandler}/>
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username='Ashish Goyal' />
            </div>
        );
    }
}

export default Assign1;