import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCocktailList } from "../redux/cocktailSlice";
import CocktailCard from "../component/CocktailCard";

function Cocktail() {
  const { loading, cocktailList } = useSelector((state) => state.cocktail);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(getCocktailList({ search: searchValue }));
  }, [searchValue]);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="search..."
        value={searchValue}
        className="form-control my-4"
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {loading && <h2>Loading</h2>}
      <div className="row py-5">
        {cocktailList &&
          cocktailList.map((item, index) => {
            return <CocktailCard key={index} item={item} />;
          })}
      </div>
    </div>
  );
}

export default Cocktail;
