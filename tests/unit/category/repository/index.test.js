import categoryRepository from "../../../../src/application/repositories/category";
import categoryRepositoryImpl from "../../../../src/frameworks/repositories/category";

let repository = null;

describe("Category repository test", () => {
  beforeAll(() => {
    // Initializing the repository
    repository = categoryRepository(categoryRepositoryImpl());
  });

  // This is a unit test for fetching all the categories
  it("should find all the categories", () => {
    let categories = repository.findAll();
    expect(categories.length).toBeGreaterThan(0);
  });
});
