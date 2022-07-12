import articleRepositoryInterface from "../../repositories/article";
import categoryRepositoryInterface from "../../repositories/category";

// articleService is a function that defines all the service function of the article entity
export default function articleService(
  articleRepositoryImpl,
  categoryRepositoryImpl,
  service
) {
  // Initiating both articleRepository and category repository
  let articleRepo = articleRepositoryInterface(articleRepositoryImpl);
  let categoryRepo = categoryRepositoryInterface(categoryRepositoryImpl);

  // getByCategory is a function that gets articles according to their categories from the news api service
  const getByCategory = (category) => {
    return service.getByCategory(category);
  };

  // start is a function that initiates the news api service for populating the repository
  const start = () => {
    let responses = []; // Important for testing
    let categories = categoryRepo.findAll();

    categories.forEach((category) => {
      // Getting articles for each category
      let response = getByCategory(category);
      response
        .then((response) => {
          // Checking if response is 'ok'
          if (response.data && response.data.status == "ok") {
            let articles = response.data.articles ?? [];

            // Adding the articles to the repository
            articleRepo.addMultiple(articles, category);
          }
        })
        .catch((e) => {});

      responses.push(response);
    });

    return responses;
  };

  return {
    start,
    getByCategory,
  };
}
