// categoryRepository is a function that defines all the repository function of the category entity
export default function categoryRepository(repository) {
  // findAll is a repository function that returns all the categories available in the repository
  const findAll = () => repository.findAll();

  return {
    findAll,
  };
}
