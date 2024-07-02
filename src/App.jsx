import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [meals, setMeals] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  const getData = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchBar)
      .then((response) => {
        console.log(response.data.meals);
        setMeals(response.data.meals);
      });
  };

  useEffect(() => {
    getData();
  }, [searchBar]);

  return (
    <>
      {/* <h1>React Cooking App</h1> */}
      <input
        className="searchBar"
        type="text"
        placeholder="Chercher un produit (en anglais)"
        onChange={(e) => {
          setSearchBar(e.target.value);
        }}
      />
      <div className="card-container">
        {meals &&
          meals.slice(0, 24).map((meal) => (
            //composant importé en lui donnant une props 'meal'
            <Card key={meal.idMeal} meal={meal} />
          ))}
      </div>
    </>
  );
}
export default App;
