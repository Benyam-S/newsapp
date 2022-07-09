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

  router.route("/").get(controller.fetchAllArticles);

  return router;
}
