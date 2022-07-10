import articleUC from "../../../application/use_cases/article";
import { CATEGORY_ALL } from "../../../entities/constants";

// articleController is a controller function defines all the article related controller functions
export default function articleController(
  articleRepository,
  articleRepositoryImpl
) {
  const repository = articleRepository(articleRepositoryImpl());
  const articleUseCase = articleUC(repository);

  // fetchArticleByTitle is a request handler function that fetches an articles from system using the article title
  const fetchArticleByTitle = (req, res, next) => {
    let title = req.params.title;
    let category = req.params.category;
    let article = articleUseCase.findByTitle(title, category, repository);

    // Checking if the article is found
    if (article) {
      let response = {
        status: "ok",
        article,
      };

      // Setting status code to ok and sending the json response
      res.status(200).json(response);
      return;
    }

    res.status(400).json({
      status: "bad",
      error: "article not found",
    });
  };

  // fetchArticlesByCategory is a request handler function that fetches all the articles in the system based on their category
  const fetchArticlesByCategory = (req, res, next) => {
    let category = req.params.category;
    let pageNum = req.query.page;
    let sortBy = req.query.sortBy ?? "newest";
    let perPage = 10;

    try {
      pageNum = parseInt(pageNum);
    } catch (e) {
      pageNum = 1;
    }

    let output = articleUseCase.findByCategory(
      category ?? CATEGORY_ALL,
      pageNum,
      perPage,
      sortBy
    );

    if (output.articles.length > 0) {
      let response = {
        status: "ok",
        category,
        articles: output.articles,
        pageCount: output.pageCount,
        pageNum,
        perPage,
        sortBy,
      };

      // Setting status code to ok and sending the json response
      res.status(200).json(response);
      return;
    }

    let response = {
      status: "bad",
      category,
      error: "no articles for the given category",
    };

    // Setting status code to ok and sending the json response
    res.status(400).json(response);
  };

  // searchArticles is a request handler function that searches articles based on the key
  const searchArticles = (req, res, next) => {
    let category = req.params.category;
    let key = req.query.q;
    let pageNum = req.query.page;
    let sortBy = req.query.sortBy ?? "newest";
    let perPage = 10;

    try {
      pageNum = parseInt(pageNum);
    } catch (e) {
      pageNum = 1;
    }

    let output = articleUseCase.searchByTitle(
      key,
      category ?? CATEGORY_ALL,
      pageNum,
      perPage,
      sortBy
    );

    if (output.articles.length > 0) {
      let response = {
        status: "ok",
        category,
        key,
        articles: output.articles,
        pageCount: output.pageCount,
        pageNum,
        perPage,
        sortBy,
      };

      // Setting status code to ok and sending the json response
      res.status(200).json(response);
      return;
    }

    let response = {
      status: "bad",
      category,
      key,
      error: "no result for the given search key",
    };

    // Setting status code to ok and sending the json response
    res.status(400).json(response);
  };

  return {
    fetchArticleByTitle,
    fetchArticlesByCategory,
    searchArticles,
  };
}
