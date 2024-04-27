import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import data from "../data";
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedProducts = typeFilter
    ? data.filter((product) => product.productType === typeFilter)
    : data;
  const productElements = displayedProducts.map((product) => {
    return (
      <Link to={product.id} key={product.id} className="product">
        <img className="max-w-32" src={product.productImg} alt={product.name} />
        <p>{product.name}</p>
        <p>{product.price}</p>
      </Link>
    );
  });
  function handleFilter(key, value) {
    setSearchParams((prevParams) => {
      if (value == null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  return (
    <div className="">
      <div className="flex flex-wrap justify-center px-2  gap-2">
        <button
          className="rounded-xl px-3 bg-sky-600 text-white"
          onClick={() => handleFilter("type", "arduino")}
        >
          Arduino
        </button>
        <button
          className="rounded-xl bg-rose-700 px-3 text-white "
          onClick={() => handleFilter("type", "raspberry")}
        >
          Raspberry
        </button>
        <button
          className="rounded-xl px-3 bg-lime-700 text-white "
          onClick={() => handleFilter("type", "parts")}
        >
          Parts | components
        </button>
        {typeFilter && (
          <button
            className="underline text-white"
            onClick={() => handleFilter("type", null)}
          >
            Clear Filter
          </button>
        )}
      </div>
      <div className="gird sm:grid-cols-2 place-items-center mt-6 px-5">
        {" "}
        {productElements}
      </div>
    </div>
  );
}
