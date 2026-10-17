// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"upper-river","repository":"africa","path":"gambia/upper-river","depth":2,"parent":"gambia","children":["farato"]});
export const childModules = Object.freeze({"farato":"./farato/farato.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
