import React from "react";

const ProductCard = ({ item, border }) => {
  const borderClass = border ? "border-white border-2" : "";

  return (
    <div
      className={`w-64 flex flex-col items-center mb-12 ${borderClass} rounded-xl p-2`}
    >
      <p className="text-3xl font-bold text-white">{item.heading}</p>
      <p className="text-1 font-bold text-gray-500">{item.text}</p>
    </div>
  );
};

export default ProductCard;
