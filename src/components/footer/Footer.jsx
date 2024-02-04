import React from "react";

const Footer = () => {
  return (
    <div className="flex h-full w-full flex-col flex-wrap justify-between bg-gray-900 px-4 pt-8 text-white md:flex-row md:px-4">
      <div>
        <h2 className="mt-4 text-xl font-bold">PW Skills</h2>
        <div className="my-2 h-1 w-32 rounded-s-2xl border-b-2 border-yellow-400" />
        <div>
          <p>About Us</p>
          <p>Faqs</p>
          <p>Privacy policy</p>
        </div>
      </div>
      <div>
        <h2 className="mt-4 text-xl font-bold">Products</h2>
        <div className="my-2 h-1 w-32 rounded-s-2xl border-b-2 border-yellow-400" />
        <div>
          <p>PW Skills Lab</p>
          <p>Job Portal</p>
          <p>Experience Portal</p>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="mt-4 text-xl font-bold">Links</h2>
        <div className="my-2 h-1 w-32 rounded-s-2xl border-b-2 border-yellow-400" />
        <div>
          <p>Discord Channel</p>
          <p>PW Youtube</p>
          <p>Careers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
