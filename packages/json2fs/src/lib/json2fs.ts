import * as fs from 'fs';

export async function createNestedStructure(data: any, dir: string) {
  // check if the current node is an object
  if (typeof data === 'object') {
      // create a new directory with the current key
      if (!fs.existsSync(dir)) {
          await fs.promises.mkdir(dir);
      }
      // iterate over the properties of the object
      for (const key in data) {
          // recursively call the function with the value of the property and the new directory path
          await createNestedStructure(data[key], `${dir}/${key}`);
      }
  } else {
      // if the current node is not an object, it is a leaf node, so create a file
      await fs.promises.writeFile(`${dir}`, data.toString());
  }
}
