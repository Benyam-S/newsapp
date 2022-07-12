import express from "express";
import { faker } from "@faker-js/faker";
import request from "supertest";

import config from "../../../../src/config/config";
import expressConfig from "../../../../src/frameworks/webserver/express";
import serverConfig from "../../../../src/frameworks/webserver/server";
import routes from "../../../../src/frameworks/webserver/routes";

import articleRepositoryInterface from "../../../../src/application/repositories/article";
import articleRepositoryImpl from "../../../../src/frameworks/repositories/article";

import categoryRepositoryInterface from "../../../../src/application/repositories/category";
import categoryRepositoryImpl from "../../../../src/frameworks/repositories/category";

import emailServiceImpl from "../../../../src/frameworks/services/email";

import initControllers from "../../../../src/adapter/controller";

let stubArticleTitle = null;
let subArticleCategory = null;

// Initializing the repository
let articleRepository = articleRepositoryImpl();
let articleRepo = articleRepositoryInterface(articleRepository);
let categoryRepository = categoryRepositoryImpl();
let categoryRepo = categoryRepositoryInterface(categoryRepository);

const app = express();
let requester = request(app);
let server = null;

expressConfig(app);

routes(
  app,
  initControllers({
    articleRepository,
    categoryRepository,
    emailService: emailServiceImpl,
  })
);

describe("Article API test", () => {
  beforeAll(() => {
    // Starting the server before all test
    server = serverConfig(app, config).startServer({
      articleRepository: articleRepo,
      categoryRepository: categoryRepo,
    });

    stubArticleTitle = faker.lorem.paragraph();
    subArticleCategory = "business";

    // Added a stub article for finding and searching purpose
    let addedArticle = articleRepo.add(
      {
        author: faker.name.findName(),
        title: stubArticleTitle,
        description: faker.lorem.text(),
        url: faker.internet.url(),
        urlToImage: faker.image.imageUrl(),
        publishedAt: faker.date.recent(),
        content: faker.lorem.text(),
      },

      subArticleCategory
    );

    articleRepo.add(addedArticle, subArticleCategory); // creating a duplicate

    let newArticles = [];
    categoryRepo.findAll().forEach((category) => {
      // Adding random articles for sorting
      for (let i = 0; i <= 3; i++) {
        newArticles.push({
          author: faker.name.findName(),
          title: faker.lorem.paragraph(),
          description: faker.lorem.text(),
          url: faker.internet.url(),
          urlToImage: faker.image.imageUrl(),
          publishedAt: faker.date.past(),
          content: faker.lorem.text(),
        });
      }

      articleRepo.addMultiple(newArticles, category);
    });
  });

  afterAll(() => {
    // Closing the server after all test are done
    server.close();
  });

  // This is an integration test for the find articles by category
  describe("GET /articles/:category", () => {
    it("should return articles by category", async () => {
      let response = await requester.get("/articles/all?page=1&sortBy=newest");
      expect(response.status).toEqual(200);
      expect(response.body.articles).not.toBeNull();
      expect(response.body.articles.length).toBeGreaterThan(0); // Since we added articles on beforeAll
    });

    it("shouldn't return articles by category| category error", async () => {
      let response = await requester.get(
        `/articles/${faker.random.alphaNumeric(10)}?page=1`
      );
      expect(response.status).toEqual(400);
    });
  });

  // This is an integration test for the find an article by title
  describe("GET /articles/:category/:title", () => {
    it("should return article by title", async () => {
      let response = await requester.get(
        `/articles/${subArticleCategory}/${stubArticleTitle}`
      );

      expect(response.status).toEqual(200);
      expect(response.body.article).not.toBeNull();
      expect(response.body.article.title).toMatch(stubArticleTitle); // Since we added articles on beforeAll
    });

    it("shouldn't return article by title| title error", async () => {
      let response = await requester.get(
        `/articles/${subArticleCategory}/${faker.random.alphaNumeric(10)}`
      );
      expect(response.status).toEqual(400);
    });

    it("shouldn't return article by title| category error", async () => {
      let response = await requester.get(
        `/articles/${faker.random.alphaNumeric(10)}/${subArticleCategory}`
      );
      expect(response.status).toEqual(400);
    });
  });

  // This is an integration test for the search articles by the title
  describe("GET /articles/:category/search", () => {
    it("should return articles by title search word", async () => {
      let response = await requester.get(
        `/articles/${subArticleCategory}/search?q=${stubArticleTitle}&page=1&sortBy=newest`
      );
      expect(response.status).toEqual(200);
      expect(response.body.articles).not.toBeNull();
      expect(response.body.articles.length).toBeGreaterThan(0); // Since we added articles on beforeAll
    });

    it("shouldn't return articles by title search word| title error", async () => {
      let response = await requester.get(
        `/articles/all/search?q=${faker.random.alphaNumeric(10)}&page=1`
      );
      expect(response.status).toEqual(400);
    });

    it("shouldn't return articles by title search word| category error", async () => {
      let response = await requester.get(
        `/articles/${faker.random.alphaNumeric(
          10
        )}/search?q=${stubArticleTitle}&page=1&sortBy=newest`
      );
      expect(response.status).toEqual(400);
    });
  });
});
