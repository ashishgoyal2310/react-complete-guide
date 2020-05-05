import React from 'react';
import classes from './BurgerIngredients.module.css'

const BurgerIngredients = (props) => {
    let Ingredients = null;
    switch ( props.type ) {
        case 'burger-top':
            Ingredients = (
                <div className={ classes.BurgerTop }></div>
            );
            break;
        case 'burger-bottom':
            Ingredients = <div className={ classes.BurgerBottom }></div>;
            break;
        case 'tikki':
            Ingredients = <div className={ classes.Tikki }>Tikki</div>;
            break;
        case 'cheese':
            Ingredients = <div className={ classes.Cheese }>Cheese</div>;
            break;
        case 'salad':
            Ingredients = <div className={ classes.Salad }>Salad</div>;
            break;
        case 'bacon':
            Ingredients = <div className={ classes.Bacon }>Bacon</div>;
            break;
        default:
            Ingredients = null;
            break;
    }
    return Ingredients;
}

export default BurgerIngredients;