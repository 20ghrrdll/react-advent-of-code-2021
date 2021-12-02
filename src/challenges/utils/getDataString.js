import fs from 'fs';
import path from 'path';

const getDataString = (filepath) => {
  return fs.readFileSync(
    path.resolve(__dirname, filepath),
    'utf-8',
  );
};

export default getDataString