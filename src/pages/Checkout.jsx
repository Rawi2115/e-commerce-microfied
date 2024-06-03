import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
export default function Checkout() {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart")) || []
  );
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal((prevTotal) => {
      let price = 0;
      cart.forEach((product) => {
        price +=
          parseFloat(product.price.replace("$", "")) *
          parseFloat(product.quantity);
      });
      return price;
    });
  }, [cart]);
  function handleRemove(id) {
    setCart((prevCart) => {
      let newCart = [...prevCart];
      const productIndex = prevCart.findIndex((item) => item.id == id);
      const product = prevCart[productIndex];
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        newCart = newCart.filter((item) => item.id !== id);
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }
  function handlePurchase() {
    setCart([]);
    localStorage.removeItem("cart");
    alert("your transaction has been completed successfully");
  }
  const productElements = cart.map((product) => {
    return (
      <div className="product">
        <Link to={`/products/${product.id} `} className="">
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
        </Link>
        <p className="text-black justify-self-start">
          Quantity: {product.quantity}
        </p>
        <p className="justify-self-start text-yellow-600">
          Price: {product.price}
        </p>
        <button
          onClick={() => handleRemove(product.id)}
          className="flex justify-self-start items-center text-red-600"
        >
          Remove product
          <MdDeleteOutline />
        </button>
      </div>
    );
  });
  return cart.length ? (
    <div>
      <div className="px-3 gap-5 grid grid-cols-auto-fit mx-auto place-items-center justify-center max-w-2xl">
        {productElements}
      </div>
      <form className="mx-auto mt-10 flex flex-col items-center" action="">
        <h2 className="text-center  text-2xl">Your total is: ${total}</h2>
        <button
          onClick={() => handlePurchase()}
          className="py-2 px-8 text-lg text-white rounded-lg bg-green-700  "
        >
          Purchase
        </button>
      </form>
    </div>
  ) : (
    <h2 className="text-center text-3xl">your cart is empty</h2>
  );
}
