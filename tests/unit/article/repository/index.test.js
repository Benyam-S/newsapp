import { faker } from "@faker-js/faker";
import { v4 } from "uuid";

import { CATEGORY_ALL } from "../../../../src/entities/constants";
import articleRepository from "../../../../src/application/repositories/article";
import articleRepositoryImpl from "../../../../src/frameworks/repositories/article";

let repository = null;
let stubArticleID = null;
let stubArticleTitle = null;
let subArticleCategory = null;

describe("Article repository test", () => {
  beforeAll(() => {
    // Initializing the repository
    repository = articleRepository(articleRepositoryImpl());
    stubArticleTitle = faker.lorem.paragraph();
    subArticleCategory = "business";

    // Added a stub article for finding and searching purpose
    let addedArticle = repository.add(
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

    stubArticleID = addedArticle.id;
    repository.add(addedArticle, subArticleCategory); // creating a duplicate

    // Adding random articles for sorting
    let newArticles = [];
    for (let i = 0; i <= 5; i++) {
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

    repository.addMultiple(newArticles, "business");
  });

  // This is a unit test for finding article by its id from the repository
  describe("Fetch article by id", () => {
    it("should find article by id", () => {
      let article = repository.findById(stubArticleID);

      // The result article should have the same id as the stub one
      expect(article).not.toBeNull();
      expect(article.id).toBe(stubArticleID);
    });

    it("shouldn't find article by id", () => {
      let article = repository.findById(v4());
      expect(article).toBeNull();
    });
  });

  // This is a unit test for finding article by its title from the repository
  describe("Fetch article by title", () => {
    it("should find article by title", () => {
      let article = repository.findByTitle(
        stubArticleTitle,
        subArticleCategory
      );

      // The result article should have the same title as the stub one
      expect(article).not.toBeNull();
      expect(article.title).toBe(stubArticleTitle);
    });

    // This is a unit test for finding article by its title from the repository
    it("shouldn't find article by title| title error", () => {
      let article = repository.findByTitle(v4(), subArticleCategory);
      expect(article).toBeNull();
    });

    // This is a unit test for finding article by its title from the repository
    it("shouldn't find article by title| category error", () => {
      let article = repository.findByTitle(stubArticleTitle, v4());
      expect(article).toBeNull();
    });
  });

  // This is a unit test for finding articles for a give category in the repository
  describe("Fetch articles by category", () => {
    it("should find articles by category", () => {
      let { articles } = repository.findByCategory(subArticleCategory, 1, 10);

      // Since the article was added in the beforeAll call, the findByCategory must find it
      expect(articles.length).toBeGreaterThan(0);
      articles.forEach((article) => {
        // The result article should have the same category as the stub one
        expect(article).not.toBeNull();
        expect(article.category).toBe(subArticleCategory);
      });
    });

    it("should find articles by category| ALL", () => {
      let { articles } = repository.findByCategory(CATEGORY_ALL, 1, 10);

      // Since articles was added in the beforeAll call, the findByCategory must find them
      expect(articles.length).toBeGreaterThan(0);
      articles.forEach((article) => {
        // The result article should have the same category as the stub one
        expect(article).not.toBeNull();
      });
    });

    it("should find articles by category| NEWEST", () => {
      let { articles } = repository.findByCategory(
        CATEGORY_ALL,
        1,
        10,
        "newest"
      );

      // Since articles was added in the beforeAll call, the findByCategory must find them
      expect(articles.length).toBeGreaterThan(0);
      for (let i = 0; i < articles.length - 1; i++) {
        let prev = new Date(articles[i].publishedAt);
        let next = new Date(articles[i + 1].publishedAt);

        // Expecting the prev being greater than next
        expect(prev.getTime()).toBeGreaterThanOrEqual(next.getTime());
      }
    });

    it("should find articles by category| OLDEST", () => {
      let { articles } = repository.findByCategory(
        CATEGORY_ALL,
        1,
        10,
        "oldest"
      );

      // Since articles was added in the beforeAll call, the findByCategory must find them
      expect(articles.length).toBeGreaterThan(0);
      for (let i = 0; i < articles.length - 1; i++) {
        let prev = new Date(articles[i].publishedAt);
        let next = new Date(articles[i + 1].publishedAt);

        // Expecting the prev being less than next
        expect(prev.getTime()).toBeLessThanOrEqual(next.getTime());
      }
    });

    it("should find articles by category| ASCENDING", () => {
      let { articles } = repository.findByCategory(CATEGORY_ALL, 1, 10, "asc");

      // Since articles was added in the beforeAll call, the findByCategory must find them
      expect(articles.length).toBeGreaterThan(0);
      for (let i = 0; i < articles.length - 1; i++) {
        let prev = articles[i].title;
        let next = articles[i + 1].title;

        // Expecting the prev title being less than or equals to next title
        expect(prev <= next).toEqual(true);
      }
    });

    it("should find articles by category| DESCENDING", () => {
      let { articles } = repository.findByCategory(CATEGORY_ALL, 1, 10, "desc");

      // Since articles was added in the beforeAll call, the findByCategory must find them
      expect(articles.length).toBeGreaterThan(0);
      for (let i = 0; i < articles.length - 1; i++) {
        let prev = articles[i].title;
        let next = articles[i + 1].title;

        // Expecting the prev title being greater than or equals to next title
        expect(prev >= next).toEqual(true);
      }
    });

    it("shouldn't find articles by category| category error", () => {
      let { articles } = repository.findByCategory(v4(), 100, 10);
      expect(articles.length).toBe(0);
    });

    it("shouldn't find articles by category| pageNum error", () => {
      let { articles } = repository.findByCategory(CATEGORY_ALL, 100, 10);
      expect(articles.length).toBe(0);
    });
  });

  // This is a unit test for searching articles in the repository
  describe("Search articles by title", () => {
    it("should search articles by title", () => {
      let { articles } = repository.searchByTitle(
        stubArticleTitle,
        subArticleCategory,
        1,
        10
      );

      // Since the article was added in the beforeAll call, the searchByTitle must find it
      expect(articles.length).toBeGreaterThan(0);
      articles.forEach((article) => {
        // The result article should contain the searched title word
        expect(article).not.toBeNull();
        expect(article.title).toEqual(
          expect.stringContaining(stubArticleTitle)
        );
      });
    });

    it("should search articles by title| ALL", () => {
      let { articles } = repository.searchByTitle(
        stubArticleTitle,
        CATEGORY_ALL,
        1,
        10
      );

      // Since the article was added in the beforeAll call, the searchByTitle must find it
      expect(articles.length).toBeGreaterThan(0);
      articles.forEach((article) => {
        // The result article should contain the searched title word
        expect(article).not.toBeNull();
      });
    });

    it("should search articles by title| title error", () => {
      let { articles } = repository.searchByTitle(v4(), CATEGORY_ALL, 1, 10);

      expect(articles.length).toBe(0);
    });

    it("should search articles by title| category error", () => {
      let { articles } = repository.searchByTitle(
        stubArticleTitle,
        v4(),
        1,
        10
      );

      expect(articles.length).toBe(0);
    });

    it("should search articles by title| pageNum error", () => {
      let { articles } = repository.searchByTitle(
        stubArticleTitle,
        CATEGORY_ALL,
        100,
        10
      );

      expect(articles.length).toBe(0);
    });
  });

  // This is a unit test for adding an article to the repository
  it("should add new article", () => {
    let newArticle = {
      author: faker.name.findName(),
      title: faker.lorem.paragraph(),
      description: faker.lorem.text(),
      url: faker.internet.url(),
      urlToImage: faker.image.imageUrl(),
      publishedAt: faker.date.recent(),
      content: faker.lorem.text(),
    };

    // If the new article is added then it will have an id and matching title
    let addedArticle = repository.add(newArticle, "business");
    expect(addedArticle.id).not.toBe("");
    expect(addedArticle.title).toBe(newArticle.title);
    expect(addedArticle.category).toBe("business");
  });

  // This is a unit test for adding multiple articles to the repository
  it("should add multiple articles", () => {
    let newArticles = [];

    for (let i = 0; i <= 5; i++) {
      newArticles.push({
        author: faker.name.findName(),
        title: faker.lorem.paragraph(),
        description: faker.lorem.text(),
        url: faker.internet.url(),
        urlToImage: faker.image.imageUrl(),
        publishedAt: faker.date.recent(),
        content: faker.lorem.text(),
      });
    }

    let addedArticles = repository.addMultiple(newArticles, "business");
    addedArticles.forEach((addedArticle, index) => {
      // If the new article is added then it will have an id and matching title
      expect(addedArticle.id).not.toBe("");
      expect(addedArticle.title).toBe(newArticles[index].title);
      expect(addedArticle.category).toBe("business");
    });
  });
});
