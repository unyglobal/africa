// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"block-5","repository":"africa","path":"botswana/city-of-francistown/francistown/block-5","depth":4,"parent":"botswana/city-of-francistown/francistown","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
