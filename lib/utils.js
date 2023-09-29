import {fileURLToPath} from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const resolve = (...dirs) => {
  return path.resolve(__dirname, '..', ...dirs);
};
