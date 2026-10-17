// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"litoral","repository":"africa","path":"equatorial-guinea/litoral","depth":2,"parent":"equatorial-guinea","children":["bata"]});
export const childModules = Object.freeze({"bata":"./bata/bata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
