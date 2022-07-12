import { faker } from "@faker-js/faker";

import categoryRepositoryInterface from "../../../../src/application/repositories/category";
import categoryRepositoryImpl from "../../../../src/frameworks/repositories/category";
import articleRepositoryInterface from "../../../../src/application/repositories/article";
import articleRepositoryImpl from "../../../../src/frameworks/repositories/article";
import articleService from "../../../../src/application/services/article";
import articleServiceImpl from "../../../../src/frameworks/services/article";

let service = null;
let articleRepo = null;
let categoryRepo = null;

describe("Article service test", () => {
  beforeAll(() => {
    // Initializing the service
    service = articleService(
      articleRepositoryImpl,
      categoryRepositoryImpl,
      articleServiceImpl()
    );

    categoryRepo = categoryRepositoryInterface(categoryRepositoryImpl());
    articleRepo = articleRepositoryInterface(articleRepositoryImpl());
  });

  // This is a unit test for fetching articles from the news api service according to their category
  describe("Fetch articles with category", () => {
    it("should get articles with category", async () => {
      // Since 'business' does exist articles should be found
      const response = await service.getByCategory("business");
      expect(response.status).toBe(200);
      expect(response.data.articles).not.toBeNull();
      let articles = response.data.articles;
      expect(articles.length).toBeGreaterThan(0);
    });

    it("shouldn't get articles with category", async () => {
      // Since random category name does exist articles shouldn't be found
      const response = await service.getByCategory(faker.name.firstName());
      expect(response.status).toBe(200);
      expect(response.data.articles).not.toBeNull();
      let articles = response.data.articles;
      expect(articles.length).toBe(0);
    });
  });

  // This is a unit test for fetching articles from the news api service according to their category
  it("Initiate article service", () => {
    let responses = service.start();
    expect(responses.length).toBeGreaterThan(0);

    // After initiating the service should populate the system with articles
    responses.forEach(async (element) => {
      response = await element;
      expect(response.status).toBe(200);
      expect(response.data.articles).not.toBeNull();
      let articles = response.data.articles;
      expect(articles.length).toBeGreaterThan(0);
    });
  });
});
