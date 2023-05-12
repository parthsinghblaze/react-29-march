import React, { useEffect, useState } from "react";

function CocktailListing() {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchCocktail() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((resp) => resp.json())
      .then((data) => {
        setDrinks(data.drinks);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchCocktail();
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h4>Cocktail </h4>
      <hr />
      <div className="row">
        {drinks.map((item) => {
          const { strDrink, strDrinkThumb, strInstructions } = item;

          return (
            <div className=" col-6 col-md-4 mb-4">
              <div className="card">
                <img src={strDrinkThumb} alt="" />
                <div className="card-body">
                  <h3>Drink name: {strDrink} </h3>
                  <p className="text-truncate">{strInstructions}</p>
                  <button className="btn btn-info">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CocktailListing;
