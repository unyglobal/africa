// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wadi-ash-shati","repository":"africa","path":"libya/wadi-ash-shati","depth":2,"parent":"libya","children":["brak"]});
export const childModules = Object.freeze({"brak":"./brak/brak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
