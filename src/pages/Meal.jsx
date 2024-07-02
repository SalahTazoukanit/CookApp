import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Card from "../components/Card";

const Meal = () => {
  const [meal, setMeal] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        setMeal(response.data.meals[0]);
        console.log(response.data.meals[0]);
      });
  }, [id]);

  return (
    <>
      {meal && (
        <div className="cardMeal">
          <a href={meal.strMealThumb} target="blank">
            <img src={meal.strMealThumb} alt={"image " + meal.strMeal} />
          </a>
          <div>
            <h1>{meal.strMeal}</h1>
            <h4> Origin : {meal.strArea}</h4>
            <p>Description : {meal.strInstructions} </p>
            <p>Source : {meal.strSource}</p>
          </div>
        </div>
      )}

      {/* <Card meal={meal} /> */}
    </>
  );
};
export default Meal;
