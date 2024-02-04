import React from "react";

const StudentsSectionCard = ({ item }) => {
  return (
    <div>
      <p className="text-3xl font-bold text-white">{item.heading}</p>
      <p className="text-3xl font-bold text-gray-500">{item.text}</p>
    </div>
  );
};

export default StudentsSectionCard;
