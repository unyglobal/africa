// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"embu-county","repository":"africa","path":"kenya/embu-county","depth":2,"parent":"kenya","children":["embu"]});
export const childModules = Object.freeze({"embu":"./embu/embu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
