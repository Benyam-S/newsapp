import express from "express";

// Setting the routes for handling article related requests
export default function articleRouter(controller) {
  const router = express.Router(controller);

  // Setting the routes for the article request handlers
  router.route("/:category").get(controller.fetchArticlesByCategory);
  router.route("/:category/search").get(controller.searchArticles);
  router.route("/:category/:title").get(controller.fetchArticleByTitle);

  return router;
}
