import articleRepositoryInterface from "../../repositories/article";
import categoryRepositoryInterface from "../../repositories/category";

// initArticleService is a function that initiates the news api service for populating the repository
export default function initArticleService(
  articleRepositoryImpl,
  categoryRepositoryImpl,
  service
) {
  // Initiating both articleRepository and category repository
  let articleRepo = articleRepositoryInterface(articleRepositoryImpl());
  let categoryRepo = categoryRepositoryInterface(categoryRepositoryImpl());

  let categories = categoryRepo.findAll();

  categories.forEach((category) => {
    // Getting articles for each category
    service
      .getByCategory(category)
      .then((response) => {
        // Checking if response is 'ok'
        if (response.data && response.data.status == "ok") {
          let articles = response.data.articles ?? [];

          // Adding the articles to the repository
          articleRepo.addMultiple(articles, category);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
}
