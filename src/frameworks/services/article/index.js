import axios from "axios";
import config from "../../../config/config";

// articleService is a function that implements all the need functions for the news api service
export default function articleService() {
  // getByCategory is a function that fetches news articles form the news api based on their category
  const getByCategory = (category) => {
    // Sending request to news api for fetching all the top headline news
    let url = `${config.newsAPIBaseURL}?category=${category}&apiKey=${config.newsAPIKey}`;
    return axios.get(url);
  };

  return {
    getByCategory,
  };
}
