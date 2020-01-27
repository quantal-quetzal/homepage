module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats(["html", "liquid", "md", "css", "jpg"]);
  eleventyConfig.addPassthroughCopy("*.css");
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src"
    }
  };
};
