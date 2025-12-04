module.exports = function(eleventyConfig) {
  // Zorg dat de admin-map 1-op-1 wordt gekopieerd
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: ".",      // hier staan jouw bestanden, zoals Index.html :contentReference[oaicite:0]{index=0}
      output: "_site"  // hier zet Eleventy de site neer voor Netlify
    }
  };
};
