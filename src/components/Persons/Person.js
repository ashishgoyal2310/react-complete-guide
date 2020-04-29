import React from 'react';
import classes from './Person.module.css'


export const Person = (props) => {
    // const rnd = Math.random()
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong')
    // }

    return (
        <div className={classes.personCard}>
            <p className="pointer" onClick={props.onClick}>Hi { props.name }!! Your age is { props.age }</p>
            <input type="text" onChange={props.onChange} value={props.name}/>
        </div>
    )
}

export default Person;