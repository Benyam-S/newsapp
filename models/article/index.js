export default (
  id,
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
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
});
