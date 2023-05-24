import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CocktailDetail() {
  const { id } = useParams();
  const [drinkDetail, setDrinkDetail] = useState({});
  const [loading, setLoading] = useState(true);

  function fetchData() {
    setLoading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setDrinkDetail(data.drinks[0]);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="container">
      <h4>Detail: {id}</h4>
      <div className="row">
        <div className="col-md-4">
          <img src={drinkDetail.strDrinkThumb} width="100%" alt="" />
        </div>
        <div className="col-md-8">
          <h4>Name: {drinkDetail.strDrink}</h4>
          <p>{drinkDetail.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetail;
