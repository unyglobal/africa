// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"djibouti","repository":"africa","path":"djibouti/djibouti","depth":2,"parent":"djibouti","children":["balbala"]});
export const childModules = Object.freeze({"balbala":"./balbala/balbala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
