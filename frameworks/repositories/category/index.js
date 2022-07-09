// categoryRepository is a function that implements all the repository functions of the category entity
export default function categoryRepository() {
  // findAll is a function that returns all the categories
  const findAll = () => [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return {
    findAll,
  };
}
