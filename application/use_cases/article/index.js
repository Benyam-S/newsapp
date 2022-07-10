import { CATEGORY_ALL } from "../../../entities/constants";

// articleUseCase is a function that defines all the use case function of the article entity
export default function articleUseCase(articleRepo) {
  // findAll is a use case function the returns all the articles found in the system
  const findAll = () => {
    return articleRepo.findAll();
  };

  // findByCategory is a use case function that returns all the articles under a given category
  const findByCategory = (category) => {
    return articleRepo.findByCategory(category);
  };

  // findById is a use case function that returns an article that matches the given id
  const findById = (id) => {
    return articleRepo.findById(id);
  };

  // searchByTitle is a use case function that searches all the articles that contains the given title key
  const searchByTitle = (title, category = CATEGORY_ALL) => {
    // Checking if the title keyword is more that 2 characters
    if (title && title.length > 2) {
      return articleRepo.searchByTitle(title, category);
    }

    return [];
  };

  return {
    findAll,
    findByCategory,
    findById,
    searchByTitle,
  };
}
