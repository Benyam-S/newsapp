import findAll from "../../../application/use_cases/article/findAll";
import findById from "../../../application/use_cases/article/findById";
import findByCategory from "../../../application/use_cases/article/findByCategory";

// articleController is a controller function defines all the article related controller functions
export default function articleController(
  articleRepository,
  articleRepositoryImpl
) {
  const repository = articleRepository(articleRepositoryImpl());

  // fetchAllArticles is a request handler function that fetches all the articles in the system
  const fetchAllArticles = (req, res, next) => {
    let response = {
      status: "ok",
      articles: findAll(repository),
    };

    // Setting status code to ok and sending the json response
    res.status(200).json(response);
  };

  // fetchArticleById is a request handler function that fetches an articles from system using the article id
  const fetchArticleById = (req, res, next) => {
    let id = req.params.id;
    let category = req.params.category;
    let article = findById(id, repository);

    // Checking if the article is found and has correct category
    if (article && article.category == category) {
      let response = {
        status: "ok",
        article,
      };

      // Setting status code to ok and sending the json response
      res.status(200).json(response);
    } else {
      res.status(400).json({
        status: "bad",
        error: "article not found",
      });
    }
  };

  // fetchArticlesByCategory is a request handler function that fetches all the articles in the system based on their category
  const fetchArticlesByCategory = (req, res, next) => {
    let category = req.params.category;
    let response = {
      status: "ok",
      category,
      articles: findByCategory(category, repository),
    };

    // Setting status code to ok and sending the json response
    res.status(200).json(response);
  };

  return {
    fetchAllArticles,
    fetchArticleById,
    fetchArticlesByCategory,
  };
}
