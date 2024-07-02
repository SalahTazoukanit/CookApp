const Card = ({ meal }) => {
  return (
    <>
      <div className="card">
        <h3>{meal.strMeal}</h3>
        <p> Origin :{meal.strArea}</p>
        <img src={meal.strMealThumb} alt={"image " + meal.strMeal} />
        <p>Description : {meal.strInstructions.substring(0, 100) + "..."} </p>
      </div>
    </>
  );
};
export default Card;
