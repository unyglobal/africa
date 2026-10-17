// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adrar","repository":"africa","path":"mauritania/adrar","depth":2,"parent":"mauritania","children":["atar"]});
export const childModules = Object.freeze({"atar":"./atar/atar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
