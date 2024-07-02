import { Link } from "react-router-dom";

const Card = ({ meal }) => {
  return (
    <>
      <Link to={`/meal/${meal.idMeal}`}>
        <div className="card">
          <h3>{meal.strMeal}</h3>
          <p> Origin : {meal.strArea}</p>
          <img src={meal.strMealThumb} alt={"image " + meal.strMeal} />
          <p>Description : {meal.strInstructions.substring(0, 100) + "..."} </p>
        </div>
      </Link>
    </>
  );
};
export default Card;
