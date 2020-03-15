const { join } = require("path");
const { existsSync, writeFileSync, mkdirSync } = require("fs");

module.exports = async function () {
  const { rootDir, generate: { dir: generateDir } } = this.options;
  const dirPath = "foe-data";
  const filesName = ["campaign-cost", "gbs", "goods"];

  // generate foe-data in dist
  this.nuxt.hook('generate:done', async () => {
    for (const fileName of filesName) {
      const generateFilePath = join(generateDir, dirPath, `${fileName}.json`);

      if (!existsSync(join(generateDir, dirPath))) {
        mkdirSync(join(generateDir, dirPath));
      }

      writeFileSync(generateFilePath, JSON.stringify(require(join(rootDir, "lib", dirPath, `${fileName}.js`))));
    }
  });

  // render foe-data via SSR
  this.nuxt.hook('render:setupMiddleware', () => {
    for (const fileName of filesName) {
      this.nuxt.server.useMiddleware({
        path: `${dirPath}/${fileName}.json`,
        async handler(req, res) {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(require(join(rootDir, "lib", dirPath, `${fileName}.js`))));
        }
      })
    }
  })
};
