import React from "react";
import { Card, Button } from "react-bootstrap";


function Recipes(props){
    return(
        <Card style={{ width: '18rem' }} className="tourpackage tourpackage-column col-ml">
  <Card.Img variant="top" src={props.imgURL} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <p>{props.calories}</p>
    <Card.Text>

    {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
    </Card.Text>
  </Card.Body>
</Card>
        
    )
}

// const Recipe = ({title,calories,image,ingredients,mealType}) => {
//     return(
//         <div className={style.recipe}>
//             <h1>{title}</h1>
//             <ol>
//                 {ingredients.map(ingredient =>(
//                     <li>{ingredient.text}</li>
//                 ))}
//             </ol>
//             <p>{mealType}</p>
//             <p>Calories: {calories.toFixed(2)}</p>
//             <img className="images" src={image} alt="" />
//         </div>
//     )
// }

export default Recipes;