// categoryUseCase is a function that defines all the use case function of the category entity
export default function categoryUseCase(categoryRepo) {
  // findAll is a use case function the returns all the articles found in the system
  const findAll = () => {
    return categoryRepo.findAll();
  };

  return {
    findAll,
  };
}
