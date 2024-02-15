import { useContext, useState } from "react";
import searchIcon from "../../assets/icons/search.svg";
import { CategoryContext } from "../../context";
import useDebounce from "../../hooks/useDebouncing";

const Searchbar = () => {
  const [isShow, setIsShow] = useState(false);
  const { setSearchTerm, setSelectedCategory } = useContext(CategoryContext);

  const doSearch = useDebounce((term) => {
    setSearchTerm(term);
  }, 1000);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedCategory("");
    doSearch(value);
  };

  return (
    <div className="flex items-center gap-2 w-[234px] justify-end">
      {isShow && (
        <input
          className="bg-transparent border-black border ps-2 w-full text-xs md:text-base outline-none "
          type="search"
          onChange={handleChange}
          placeholder="Search News"
          required
        />
      )}
      <img
        className="cursor-pointer"
        onClick={() => setIsShow(!isShow)}
        src={searchIcon}
      />
    </div>
  );
};

export default Searchbar;
