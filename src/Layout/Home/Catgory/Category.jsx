import CategoryCard from "../CategoryCard/CategoryCard";
import {  useEffect, useState } from "react";

const Category = () => {
    const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://bd-doctors-server.vercel.app/services')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])
  return (
    <div className="bg-base-200">
      <div className="text-center font-bold text-4xl">
        <h1>Get Appointment</h1>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-4">
        
        {categories.map(category => 
          <CategoryCard key={category._id} category={category}></CategoryCard>
        )
        }
      </div>
    </div>
  );
};

export default Category;
