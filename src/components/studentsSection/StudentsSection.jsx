import React from "react";

import StudentsSectionCard from "../../components/studentsSectionCard/StudentsSectionCard";

const cardArr = [
  {
    id: 1,
    heading: "600+",
    text: "Different Courses",
  },
  {
    id: 2,
    heading: "700,000+",
    text: "students Enrolled",
  },
  {
    id: 3,
    heading: "10,000+",
    text: "Successful Transition",
  },
];

const StudentsSection = () => {
  return (
    <div className="w-100 flex h-auto flex-col flex-wrap items-center p-10 text-center">
      <div className="flex h-auto w-full flex-col flex-wrap items-center">
        <p className="text-center text-3xl font-bold text-indigo-800 md:text-4xl">
          "Pure Hardwork, No Shortcuts!"
        </p>
        <div className="mb-12 mt-2 h-1 w-36 rounded-2xl border-b-4 border-yellow-400 md:mt-4" />
      </div>
      <div className="flex w-full flex-wrap justify-evenly">
        {cardArr.map((item) => (
          <StudentsSectionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default StudentsSection;
