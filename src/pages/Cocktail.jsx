import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cocktail() {
  const [drinks, setDrinks] = useState([]);

  function fetchData() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((resp) => resp.json())
      .then((data) => setDrinks(data.drinks));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Cocktail.</h1>
      <div className="row">
        {drinks.map((item) => {
          const { strDrinkThumb, idDrink, strDrink } = item;
          return (
            <div className="col-md-3 mb-4" key={idDrink}>
              <div className="card">
                <img src={strDrinkThumb} alt="" />
                <div className="card-body">
                  <h6>{strDrink}</h6>
                  <Link className="btn btn-primary" to={`/cocktail/${idDrink}`}>
                    View
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cocktail;
