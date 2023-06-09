import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCocktailDetails } from "../redux/cocktailSlice";

function CocktailDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, cocktailDetails } = useSelector((state) => state.cocktail);

  useEffect(() => {
    dispatch(getCocktailDetails(id));
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-md-4">
          <img src={cocktailDetails.strDrinkThumb} width="100%" alt="" />
        </div>
        <div className="col-md-8">
          <h2>Name: {cocktailDetails.strDrink}</h2>
          <p> Category: {cocktailDetails.strCategory} </p>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetails;
