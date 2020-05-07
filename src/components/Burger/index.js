import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients'

const Burger = (props) => {

    const burgerIngredients = Object.keys(props.ingredients)
                    .map((ingreType) => {
                        return Array(props.ingredients[ingreType]).fill(ingreType)
                            .map((ingreType, index) => <BurgerIngredients key={ingreType+index} type={ ingreType } /> )
                    }).reduce((currentAry, nextEle) => [...currentAry, ...nextEle]);

    return (
        <div className={ classes.Burger }>
            <BurgerIngredients type='burger-top' />
            { burgerIngredients.length ? burgerIngredients : <span>Please start adding ingredients.</span> }
            <BurgerIngredients type='burger-bottom' />
        </div>
    );
}

export default Burger;