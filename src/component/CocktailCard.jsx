import React from "react";

function CocktailCard({ item }) {
  const { strDrinkThumb, strCategory, strDrink, idDrink } = item;

  return (
    <div className="col-md-3 mb-3">
      <div className="card">
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
