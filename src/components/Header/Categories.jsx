import { useContext } from "react";
import { CategoryContext } from "../../context";

const Categories = () => {
  const { setSelectedCategory, setSearchTerm } = useContext(CategoryContext);

  const handleCategory = (category) => {
   
    setSearchTerm("");
    setSelectedCategory(category);
  };
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a href="#" onClick={() => handleCategory("general")}>
            General
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategory("business")}>
            Business
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategory("entertainment")}>
            Entertainment
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategory("health")}>
            Health
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategory("science")}>
            Science
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategory("sports")}>
            Sports
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleCategory("technology")}>
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
