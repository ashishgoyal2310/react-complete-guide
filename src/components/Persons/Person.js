import React, { useEffect } from 'react';
import classes from './Person.module.css'


const Person = (props) =>  {
    // const rnd = Math.random()
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong')
    // }

    useEffect(() => {
        return () => {
            console.log('[Person.js   ] ..useEffect as componentDidUnMount (pass empty array)')
        }
    }, []);

    console.log('[Person.js   ] ..rendering');

    return (
        <div className={classes.personCard}>
            <p className="pointer" onClick={props.onClick}>Hi { props.name }!! Your age is { props.age }</p>
            <input type="text" onChange={props.onChange} value={props.name}/>
        </div>
    )
}

export default Person;