import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import StudentsSection from "../../components/studentsSection/StudentsSection";
import ProductSection from "../../components/productSection/ProductSection";

const Home = () => {
  return (
    <div>
      <NavBar />
      <StudentsSection />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default Home;
