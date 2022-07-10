import articleUC from "../../../application/use_cases/article";

// articleController is a controller function defines all the article related controller functions
export default function articleController(
  articleRepository,
  articleRepositoryImpl
) {
  const repository = articleRepository(articleRepositoryImpl());
  const articleUseCase = articleUC(repository);

  // fetchAllArticles is a request handler function that fetches all the articles in the system
  const fetchAllArticles = (req, res, next) => {
    let response = {
      status: "ok",
      articles: articleUseCase.findAll(repository),
    };

    // Setting status code to ok and sending the json response
    res.status(200).json(response);
  };

  // fetchArticleById is a request handler function that fetches an articles from system using the article id
  const fetchArticleById = (req, res, next) => {
    let id = req.params.id;
    let category = req.params.category;
    let article = articleUseCase.findById(id, repository);

    // Checking if the article is found and has correct category
    if (article && article.category == category) {
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
    let response = {
      status: "ok",
      category,
      articles: articleUseCase.findByCategory(category, repository),
    };

    // Setting status code to ok and sending the json response
    res.status(200).json(response);
  };

  // searchArticles is a request handler function that searches articles based on the key
  const searchArticles = (req, res, next) => {
    let category = req.params.category;
    let key = req.query.q;

    let articles = articleUseCase.searchByTitle(key, category, repository);
    if (articles.length > 0) {
      let response = {
        status: "ok",
        category,
        key,
        articles,
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
    fetchAllArticles,
    fetchArticleById,
    fetchArticlesByCategory,
    searchArticles,
  };
}
