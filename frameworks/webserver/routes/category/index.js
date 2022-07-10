import categoryRepositoryInterface from "../../../../application/repositories/category";
import categoryRepositoryImpl from "../../../repositories/category";
import categoryController from "../../../../adapter/controller/categories";

// Setting the routes for handling category related requests
export default function categoryRouter(express) {
  const router = express.Router();

  // load controller with dependencies
  const controller = categoryController(
    categoryRepositoryInterface,
    categoryRepositoryImpl
  );

  // Setting the routes for the category request handlers
  router.route("/").get(controller.fetchAllCategories);

  return router;
}
