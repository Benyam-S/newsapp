import findAll from "../../../application/use_cases/article/findAll";
import findById from "../../../application/use_cases/article/findById";

// articleController is a controller function defines all the article related controller functions
export default function articleController(
  articleRepository,
  articleRepositoryImpl
) {
  const repository = articleRepository(articleRepositoryImpl());

  const fetchAllArticles = (req, res, next) => {
    res.json(findAll(repository));
  };

  return {
    fetchAllArticles,
    fetchArticleById,
  };
}
