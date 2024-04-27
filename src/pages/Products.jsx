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
      <Link
        state={{ search: `?${searchParams.toString()}` }}
        to={product.id}
        key={product.id}
        className="product"
      >
        <img className="max-w-28" src={product.productImg} alt={product.name} />
        <div className="flex flex-col gap-5">
          <p
            className={
              product.productType == "arduino"
                ? "text-sky-700"
                : product.productType == "raspberry"
                ? "text-rose-700"
                : "text-lime-700"
            }
          >
            {product.name}
          </p>
          <p className="text-white">Price: {product.price}</p>
        </div>
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
          className="rounded-xl px-3 bg-sky-600 text-white hover:scale-110 duration-300"
          onClick={() => handleFilter("type", "arduino")}
        >
          Arduino
        </button>
        <button
          className="rounded-xl bg-rose-700 px-3 text-white hover:scale-110 duration-300 "
          onClick={() => handleFilter("type", "raspberry")}
        >
          Raspberry
        </button>
        <button
          className="rounded-xl px-3 bg-lime-700 text-white hover:scale-110 duration-300 "
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
      <div className="grid gap-5 max-w-6xl justify-center items-center mx-auto mt-6 px-5 ">
        {" "}
        {productElements}
      </div>
    </div>
  );
}
