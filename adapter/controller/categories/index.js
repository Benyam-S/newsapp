import categoryUC from "../../../application/use_cases/category";
// categoryController is a controller function defines all the category related controller functions
export default function categoryController(
  categoryRepository,
  categoryRepositoryImpl
) {
  const repository = categoryRepository(categoryRepositoryImpl());
  const categoryUseCase = categoryUC(repository);

  // fetchAllCategories is a request handler function that fetches all the categories in the system
  const fetchAllCategories = (req, res, next) => {
    let response = {
      status: "ok",
      categories: categoryUseCase.findAll(),
    };

    // Setting status code to ok and sending the json response
    res.status(200).json(response);
  };

  return {
    fetchAllCategories,
  };
}
