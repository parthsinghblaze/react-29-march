import React from "react";
import { useNavigate } from "react-router-dom";

function CocktailCard({ item }) {
  const { strDrinkThumb, strCategory, strDrink, idDrink } = item;
  const navigate = useNavigate();

  return (
    <div
      className="col-md-3 mb-3"
      onClick={() => navigate(`/cocktail/${idDrink}`)}
    >
      <div className="card" style={{ cursor: "pointer" }}>
        <img src={strDrinkThumb} className="w-100" alt="" />
        <div className="card-body">
          <h6 className="m-0">{strDrink}</h6>
          <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
            {strCategory}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CocktailCard;
