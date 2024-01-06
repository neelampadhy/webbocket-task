import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {

  // destructure product
  const { id, image, category, title, price } = product;
  return (
    <div className="p-5 border border-[#e4e4e4]  relative overflow-hidden group transition rounded-2xl shadow-lg">
      <div className="h-[220px]">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* category, title & price */}
      <div>
        <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <h2 className="font-semibbold">$ {price}</h2>
      </div>

        <div className="bg-primary text-white text-center rounded-full m-4 p-3">
            <Link to={`/product/${id}`} >Product Details</Link>
        </div>

    </div>
  );
};

export default Product;
