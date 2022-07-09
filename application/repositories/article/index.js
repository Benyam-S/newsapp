// articleRepository is a function that defines all the repository function of the article entity
export default function articleRepository(repository) {
  // findAll is a repository function that returns all the articles found in the repository
  const findAll = () => repository.findAll();

  // findById is a repository function that returns an article that matches the give id
  const findById = (id) => repository.findById(id);

  // findByCategory is a repository function that returns all the articles for the given category
  const findByCategory = (category) => repository.findByCategory(category);

  // add is a repository function that adds new article entity to the repository
  const add = (article, category) => repository.add(article, category);

  // addMultiple is a repository function that adds multiple articles to the repository for a given category
  const addMultiple = (articles, category) =>
    repository.addMultiple(articles, category);

  return {
    findAll,
    findById,
    findByCategory,
    add,
    addMultiple,
  };
}
