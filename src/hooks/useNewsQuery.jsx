import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../context";

const useNewsQuery = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
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
   
      fetchNewsData("category", selectedCategory);
    } else if (searchTerm) {
   
      fetchNewsData("search", searchTerm);
    } else {
      fetchNewsData();
    }
  }, [selectedCategory, searchTerm]);


  const uniqueNews = news.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.title === item.title)
  );


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
