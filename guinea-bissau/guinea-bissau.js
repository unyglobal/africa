// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guinea-bissau","repository":"africa","path":"guinea-bissau","depth":1,"parent":"","children":["bafata","bissau","gabu"]});
export const childModules = Object.freeze({"bafata":"./bafata/bafata.js","bissau":"./bissau/bissau.js","gabu":"./gabu/gabu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
