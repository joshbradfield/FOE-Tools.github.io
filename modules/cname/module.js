const { join } = require("path");
const { writeFileSync } = require("fs");

const prodUrl = "foe.tools";

module.exports = async function () {
  const { generate: { dir: generateDir } } = this.options;
  const fileName = "CNAME";

  // generate foe-data in dist
  this.nuxt.hook('generate:done', async () => {
    const generateFilePath = join(generateDir, fileName);

    writeFileSync(generateFilePath, prodUrl);
  });

  // render foe-data via SSR
  this.nuxt.hook('render:setupMiddleware', () => {
    this.nuxt.server.useMiddleware({
      path: `${fileName}`,
      async handler(req, res) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(prodUrl);
      }
    });
  })

};
