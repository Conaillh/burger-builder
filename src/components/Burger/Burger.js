import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {                                                            // ig  = ingredient
            return [...Array(props.ingredients[igKey])].map((_, i) => {            // _ = blank
                return <BurgerIngredient key={igKey + i} type={igKey} />           // i = number
            });
        })
        .reduce((arr, el) => {                                                     // arr = pervious value + el = current value
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Start adding your ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;