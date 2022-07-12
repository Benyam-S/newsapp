import express from "express";
import request from "supertest";

import config from "../../../../src/config/config";
import expressConfig from "../../../../src/frameworks/webserver/express";
import serverConfig from "../../../../src/frameworks/webserver/server";
import routes from "../../../../src/frameworks/webserver/routes";

import articleRepositoryImpl from "../../../../src/frameworks/repositories/article";
import categoryRepositoryImpl from "../../../../src/frameworks/repositories/category";
import emailServiceImpl from "../../../../src/frameworks/services/email";

import initControllers from "../../../../src/adapter/controller";

// Initializing the repository
let articleRepository = articleRepositoryImpl();
let categoryRepository = categoryRepositoryImpl();

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

describe("Category API test", () => {
  beforeAll(() => {
    server = serverConfig(app, config).startServer({
      articleRepository,
      categoryRepository,
    });
  });

  afterAll(() => {
    // Closing the server after all test are done
    server.close();
  });

  // This is an integration test for getting all the categories in the system
  it("should return all categories", async () => {
    let response = await requester.get("/categories");
    expect(response.status).toEqual(200);
    expect(response.body.categories).not.toBeNull();
    expect(response.body.categories.length).toBeGreaterThan(0);
  });
});
