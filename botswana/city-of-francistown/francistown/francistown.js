// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"francistown","repository":"africa","path":"botswana/city-of-francistown/francistown","depth":3,"parent":"botswana/city-of-francistown","children":["block-5"]});
export const childModules = Object.freeze({"block-5":"./block-5/block-5.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
