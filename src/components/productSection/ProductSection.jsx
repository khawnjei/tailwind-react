import React from "react";
import ProductCard from "../../components/productCard/ProductCard";

const cardArr = [
  {
    id: 1,
    heading: "PW Skills Lab",
    text: "Supercharge our project development with our robust lab",
  },
  {
    id: 2,
    heading: "Job Portal",
    text: "Supercharge our project development with our robust lab",
  },
  {
    id: 3,
    heading: "PW Skills Lab",
    text: "Supercharge our project development with our robust lab",
  },
  {
    id: 4,
    heading: "PW Skills Lab",
    text: "Supercharge our project development with our robust lab",
  },
  {
    id: 5,
    heading: "PW Skills Lab",
    text: "Supercharge our project development with our robust lab",
  },
];

const ProductSection = () => {
  return (
    <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
          Our Products
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12" />
      </div>
      <div className="w-[90%]  h-auto flex flex-wrap justify-around">
        {cardArr.map((item, index) => (
          <ProductCard key={item.id} item={item} border={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
