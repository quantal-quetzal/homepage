module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "liquid",
    "md",
    "css",
    "jpg",
    "png",
    "ico"
  ]);

  eleventyConfig.addPassthroughCopy(["*.css", "*.jpg", "*.png", "*.ico"]);
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src"
    }
  };
};
