// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cabinda","repository":"africa","path":"angola/cabinda","depth":2,"parent":"angola","children":["belize","buco-zau"]});
export const childModules = Object.freeze({"belize":"./belize/belize.js","buco-zau":"./buco-zau/buco-zau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
