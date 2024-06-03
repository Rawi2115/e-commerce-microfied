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
        <img
          className="max-w-28 max-h-20"
          src={product.productImg}
          alt={product.name}
        />
        <div className="justify-self-start">
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
        </div>
        <p className="justify-self-start text-yellow-600">
          Price: {product.price}
        </p>
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
      <div className="flex flex-wrap justify-center mb-8 px-2  gap-2">
        <button
          className="rounded-sm px-3 bg-sky-600 text-white hover:scale-110 duration-300"
          onClick={() => handleFilter("type", "arduino")}
        >
          Arduino
        </button>
        <button
          className="rounded-sm bg-rose-700 px-3 text-white hover:scale-110 duration-300 "
          onClick={() => handleFilter("type", "raspberry")}
        >
          Raspberry
        </button>
        <button
          className="rounded-sm px-3 bg-lime-700 text-white hover:scale-110 duration-300 "
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
      <div className="px-3 gap-5 grid grid-cols-auto-fit mx-auto place-items-center justify-center max-w-2xl">
        {" "}
        {productElements}
      </div>
    </div>
  );
}
