import { v4 } from "uuid";
import createArticle from "../../../entities/article";
import { CATEGORY_ALL } from "../../../entities/constants";

let storedArticles = []; // Repository for the articles

// articleRepository is a function that implements all the repository functions of the article entity
export default function articleRepository() {
  // findById is a function that returns an article that matches the give id
  const findById = (id) => {
    let article;
    storedArticles.forEach((element) => {
      if (element.id == id) {
        article = element;
        return;
      }
    });

    return article;
  };

  // findByTitle is a function that returns an article that matches the give title
  const findByTitle = (title, category) => {
    let article;
    storedArticles.forEach((element) => {
      if (element.title.includes(title) && element.category == category) {
        article = element;
        return;
      }
    });

    return article;
  };

  // findByCategory is a function that returns all the articles for the given category
  const findByCategory = (category, pageNum, perPage, sortBy) => {
    let total = sorted(sortBy);
    if (category != CATEGORY_ALL) {
      total = total.filter((article) => article.category == category);
    }

    let totalCount = total.length;
    let firstIndex = (pageNum <= 0 ? 0 : pageNum - 1) * perPage;
    let lastIndex = pageNum * perPage; // Since their is no index out of bound error
    let pageCount = Math.ceil(totalCount / perPage);

    if (totalCount > firstIndex) {
      return { pageCount, articles: total.slice(firstIndex, lastIndex) };
    }

    return { pageCount, articles: [] };
  };

  // searchByTitle is a function that returns articles that contains the title value
  const searchByTitle = (title, category, pageNum, perPage, sortBy) => {
    let total = sorted(sortBy);
    if (category == CATEGORY_ALL) {
      total = storedArticles.filter((article) =>
        article.title.toLowerCase().includes(title.toLowerCase())
      );
    } else {
      total = storedArticles.filter(
        (article) =>
          article.title.includes(title) && article.category == category
      );
    }

    let totalCount = total.length;
    let firstIndex = (pageNum <= 0 ? 0 : pageNum - 1) * perPage;
    let lastIndex = pageNum * perPage; // Since their is no index out of bound error
    let pageCount = Math.ceil(totalCount / perPage);

    if (totalCount > firstIndex) {
      return { pageCount, articles: total.slice(firstIndex, lastIndex) };
    }

    return { pageCount, articles: [] };
  };

  // add is a function that adds new article entity to the stored articles
  const add = (article, category) => {
    let newArticle = createArticle(
      v4(),
      category ?? "",
      article.source,
      article.author,
      article.title,
      article.description,
      article.url,
      article.urlToImage,
      article.publishedAt,
      article.content
    );
    storedArticles.push(newArticle);
  };

  // addMultiple is a function that adds multiple articles to the stored articles
  const addMultiple = (articles, category) => {
    articles.forEach((article) => {
      add(article, category);
    });
  };

  const sorted = (sortBy) => {
    if (sortBy == "newest") {
      return storedArticles.sort((a, b) => {
        let da = new Date(a.publishedAt);
        let db = new Date(b.publishedAt);
        return da - db;
      });
    } else if (sortBy == "oldest") {
      return storedArticles.sort((a, b) => {
        let da = new Date(a.publishedAt);
        let db = new Date(b.publishedAt);
        return db - da;
      });
    } else if (sortBy == "asc") {
      return storedArticles.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    } else if (sortBy == "desc") {
      return storedArticles.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
    }

    return [...storedArticles];
  };

  return {
    findById,
    findByTitle,
    findByCategory,
    searchByTitle,
    add,
    addMultiple,
  };
}
