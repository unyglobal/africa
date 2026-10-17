// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"city-of-francistown","repository":"africa","path":"botswana/city-of-francistown","depth":2,"parent":"botswana","children":["francistown"]});
export const childModules = Object.freeze({"francistown":"./francistown/francistown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
