// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bururi","repository":"africa","path":"burundi/bururi","depth":2,"parent":"burundi","children":["vyanda"]});
export const childModules = Object.freeze({"vyanda":"./vyanda/vyanda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
