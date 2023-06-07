import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCocktailList } from "../redux/cocktailSlice";
import CocktailCard from "../component/CocktailCard";

function Cocktail() {
  const { loading, cocktailList } = useSelector((state) => state.cocktail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktailList());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="container">
      <div className="row py-5">
        {cocktailList.map((item, index) => {
          return <CocktailCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Cocktail;
