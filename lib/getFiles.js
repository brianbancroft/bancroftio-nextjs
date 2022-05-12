import fs from "fs";
import path from "path";

const root = process.cwd();

export async function getFiles(dataType) {
  return fs.readdirSync(path.join(root, "data", dataType), "utf-8");
}
