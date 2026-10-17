// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gorgol","repository":"africa","path":"mauritania/gorgol","depth":2,"parent":"mauritania","children":["kaedi"]});
export const childModules = Object.freeze({"kaedi":"./kaedi/kaedi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
