import articleController from "./article";
import categoryController from "./categories";
import serviceController from "../../adapter/controller/service";

// initControllers is a function that initiate all the controller functions
export default function initControllers({
  articleRepository,
  categoryRepository,
  emailService,
}) {
  // load article controller with dependencies
  const articleCtl = articleController(articleRepository);

  // load category controller with dependencies
  const categoryCtl = categoryController(categoryRepository);

  // load service controller with dependencies
  const serviceCtl = serviceController(emailService);

  return {
    articleController: articleCtl,
    categoryController: categoryCtl,
    serviceController: serviceCtl,
  };
}
