// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bujumbura-mairie","repository":"africa","path":"burundi/bujumbura-mairie","depth":2,"parent":"burundi","children":["bujumbura"]});
export const childModules = Object.freeze({"bujumbura":"./bujumbura/bujumbura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
