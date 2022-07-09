import { v4 } from "uuid";
import createArticle from "../../../entities/article";

let storedArticles = []; // Repository for the articles

// articleRepository is a function that implements all the repository functions of the article entity
export default function articleRepository() {
  // findAll is a function that returns all the stored articles
  const findAll = () => storedArticles;

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

  // findByCategory is a function that returns all the articles for the given category
  const findByCategory = (category) =>
    storedArticles.filter((element) => element.category == category);

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

  return {
    findAll,
    findById,
    findByCategory,
    add,
    addMultiple,
  };
}
