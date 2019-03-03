import { join } from "path";
import { readdirSync } from "fs";

export function doTestOf(dirName, path = __dirname) {
  const normalizedPath = join(path, dirName);

  readdirSync(normalizedPath, { withFileTypes: true }).forEach(file => {
    if (file.isFile()) {
      require(join(normalizedPath, file.name));
    }
  });
}
