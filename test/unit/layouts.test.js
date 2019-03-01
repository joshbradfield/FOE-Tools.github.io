describe("Layouts", () => {
  const normalizedPath = require("path").join(__dirname, "layouts");

  require("fs")
    .readdirSync(normalizedPath)
    .forEach(function(file) {
      require("./layouts/" + file);
    });
});
