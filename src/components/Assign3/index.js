import React, { Component } from 'react';


class Tabletd extends Component {
    state = {
        fillColor: false,
    }

    clickHandler = () => {
        this.setState((prevState, props) => {
            return {
                fillColor: !prevState.fillColor
            };
        });
    }

    render() {
        let tdStyles = {padding: '5px'};
        if (this.state.fillColor) {
            tdStyles['backgroundColor'] = 'olive'
        }

        return (
            <td style={tdStyles} onClick={this.clickHandler}>fill</td>
        )

    }
}

const Tabletr = (
    <tr>
        <Tabletd /><Tabletd /><Tabletd />
        <Tabletd /><Tabletd /><Tabletd />
    </tr>
)

const Assign3 = () => {
    return (
        <div>
            <h1>Assignment3</h1>
            <ol>
                <li>Create Component to toggle backgroundColor on click.</li>
            </ol>

            <table>
                <tbody>
                    {Tabletr}
                    {Tabletr}
                    {Tabletr}
                    {Tabletr}
                    {Tabletr}
                    {Tabletr}
                    {Tabletr}
                </tbody>
            </table>
        </div>
    );
}

export default Assign3;