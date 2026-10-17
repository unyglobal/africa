// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kgatleng","repository":"africa","path":"botswana/kgatleng","depth":2,"parent":"botswana","children":["mochudi"]});
export const childModules = Object.freeze({"mochudi":"./mochudi/mochudi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
