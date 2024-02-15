import { useState, useEffect, useContext } from "react";
import { CategoryContext } from "../context";

const useNewsQuery = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // for checking value is available or not from searchbar or navigation clicked or not
  const { selectedCategory, searchTerm } = useContext(CategoryContext);

  const fetchNewsData = async (queryType, queryValue) => {
    try {
      setLoading(true);

      let url;
      if (queryType === "category") {
        url = `http://localhost:8000/v2/top-headlines?category=${queryValue}`;
      } else if (queryType === "search") {
        url = `http://localhost:8000/v2/search?q=${queryValue}`;
      } else {
        url = `http://localhost:8000/v2/top-headlines?category=general`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setNews(data.articles || data.result || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      // check if any category is clicked
      fetchNewsData("category", selectedCategory);
    } else if (searchTerm) {
      // check any keyword is in the search bar
      fetchNewsData("search", searchTerm);
    } else {
      fetchNewsData();
    }
  }, [selectedCategory, searchTerm]);

  // Remove duplicate articles based on title
  const uniqueNews = news.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.title === item.title)
  );

  // Determine sidebar and feature allocation based on news count
  let featureNews = null;
  let rightSidebarNews = null;
  let leftSidebarNews = [];

  if (uniqueNews.length > 0) {
    if (uniqueNews.length > 4) {
      featureNews = uniqueNews.pop();
      rightSidebarNews = uniqueNews.slice(0, 4);
      leftSidebarNews = uniqueNews.slice(4);
    } else {
      leftSidebarNews = uniqueNews;
    }
  }

  return {
    featureNews,
    rightSidebarNews,
    leftSidebarNews,
    news,
    loading,
    error,
    setLoading,
  };
};

export default useNewsQuery;
