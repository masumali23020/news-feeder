import { useState } from "react";
import { CategoryContext } from "../context";


const CategoryProvider = ({ children }) => {

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CategoryContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
