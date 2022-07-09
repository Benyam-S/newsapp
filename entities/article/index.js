// Function for creating new article entity
export default (
  id,
  category,
  source = {},
  author = "",
  title = "",
  description = "",
  url = "",
  urlToImage = "",
  publishedAt = "",
  content = ""
) => ({
  id,
  category,
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
});
