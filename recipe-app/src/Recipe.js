import React from 'react'
import style from './recipe.module.css'

const Recipe = (props) => {
    return(
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <p>calories : {props.calories} | Meal type : {props.carblabel} </p>
            <ol>
                { props.ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={props.image} alt="food recipe" />
        </div>
    );
}

export default Recipe;