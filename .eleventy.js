module.exports = function (config) {

  config.addHandlebarsHelper("isEqual", function(value1, value2) {
    return value1 === value2;
  });
  config.addWatchTarget("./src/assets/sass/");
  config.addWatchTarget('./src/assets/scripts/');
  config.addPassthroughCopy('./src/assets/images/');
  config.addPassthroughCopy('./src/assets/fonts/');
  config.addShortcode("year", () => `${new Date().getFullYear()}`);
  config.addShortcode("lowercase", (str) => {
    return str.toLowerCase();
  });

  return {
    //templateFormats: ['md', '11ty.js'],
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    },
  };
};
