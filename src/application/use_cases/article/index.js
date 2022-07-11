import { CATEGORY_ALL } from "../../../entities/constants";

// articleUseCase is a function that defines all the use case function of the article entity
export default function articleUseCase(articleRepo) {
  // findById is a use case function that returns an article that matches the given id
  const findById = (id) => {
    return articleRepo.findById(id);
  };

  // findByTitle is a use case function that returns an article that matches the given title
  const findByTitle = (title, category) => {
    return articleRepo.findByTitle(title, category);
  };

  // findByCategory is a use case function that returns all the articles under a given category
  const findByCategory = (category, pageNum, perPage, sortBy) => {
    return articleRepo.findByCategory(category, pageNum, perPage, sortBy);
  };

  // searchByTitle is a use case function that searches all the articles that contains the given title key
  const searchByTitle = (title, category, pageNum, perPage, sortBy) => {
    // Checking if the title keyword is more that 2 characters
    if (title && title.length > 2) {
      return articleRepo.searchByTitle(
        title,
        category,
        pageNum,
        perPage,
        sortBy
      );
    }

    return [];
  };

  return {
    findById,
    findByTitle,
    findByCategory,
    searchByTitle,
  };
}
