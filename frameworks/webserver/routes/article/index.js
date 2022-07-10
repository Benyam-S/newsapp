import articleController from "../../../../adapter/controller/article";
import articleRepositoryInterface from "../../../../application/repositories/article";
import articleRepositoryImpl from "../../../repositories/article";

// Setting the routes for handling article related requests
export default function articleRouter(express) {
  const router = express.Router();

  // load controller with dependencies
  const controller = articleController(
    articleRepositoryInterface,
    articleRepositoryImpl
  );

  // Setting the routes for the article request handlers
  router.route("/").get(controller.fetchAllArticles);
  router.route("/:category").get(controller.fetchArticlesByCategory);
  router.route("/:category/search").get(controller.searchArticles);
  router.route("/:category/:id").get(controller.fetchArticleById);

  return router;
}
