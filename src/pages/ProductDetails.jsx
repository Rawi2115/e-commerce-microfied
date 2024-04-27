import React from "react";
import data from "../data";
import { useParams, useLocation, Link } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();

  const productElement = data.filter((product) => product.id == id)[0];

  const search = location.state?.search || "";

  console.log(search);
  function handleCart() {}

  return productElement ? (
    <div className="mx-auto">
      <Link to={`..${search}`} relative="path" className="">
        &larr;{" "}
        <span>Back to {search ? search.split("=")[1] : "all"} Products</span>
      </Link>
      <img
        className="max-w-64 sm:max-w-96"
        src={productElement.productImg}
        alt=""
      />
      <h2 className="text-2xl">{productElement.name}</h2>
      <div className="">
        <p className="text-lg">About this product</p>
        <ul className="list-disc px-3 mb-6">
          {productElement.about.map((feature, index) => {
            return (
              <li className="text-white max-w-52" key={index}>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="">
        <p className="text-lg text-white px-2 mb-2">
          Price:{productElement.price}
        </p>
        <button
          onClick={() => handleCart()}
          className="rounded-xl bg-lime-700 text-white px-3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
}
