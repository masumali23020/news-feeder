import { useState } from "react";
import { CategoryContext } from "../context";

// eslint-disable-next-line react/prop-types
const CategoryProvider = ({ children }) => {
  // manage state from here for search and category of navigation
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
