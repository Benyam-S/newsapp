import express from "express";

// Setting the routes for handling category related requests
export default function categoryRouter(controller) {
  const router = express.Router();

  // Setting the routes for the category request handlers
  router.route("/").get(controller.fetchAllCategories);

  return router;
}
