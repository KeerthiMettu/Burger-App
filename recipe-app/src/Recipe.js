import React from 'react'

const Recipe = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>calories : {props.calories} | Meal type : {props.carblabel} </p>
            <ol>
                { props.ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={props.image} alt="food recipe" />
        </div>
    );
}

export default Recipe;