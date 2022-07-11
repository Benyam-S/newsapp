// articleRepository is a function that defines all the repository function of the article entity
export default function articleRepository(repository) {
  // findById is a repository function that returns an article that matches the give id
  const findById = (id) => repository.findById(id);

  // findByTitle is a repository function that returns an article that matches the give title
  const findByTitle = (title, category) =>
    repository.findByTitle(title, category);

  // findByCategory is a repository function that returns all the articles for the given category
  const findByCategory = (category, pageNum, perPage, sortBy) =>
    repository.findByCategory(category, pageNum, perPage, sortBy);

  // searchByTitle is a repository function that returns articles that contains the given title value
  const searchByTitle = (title, category, pageNum, perPage, sortBy) =>
    repository.searchByTitle(title, category, pageNum, perPage, sortBy);

  // add is a repository function that adds new article entity to the repository
  const add = (article, category) => repository.add(article, category);

  // addMultiple is a repository function that adds multiple articles to the repository for a given category
  const addMultiple = (articles, category) =>
    repository.addMultiple(articles, category);

  return {
    findById,
    findByTitle,
    findByCategory,
    searchByTitle,
    add,
    addMultiple,
  };
}
