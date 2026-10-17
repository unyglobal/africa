// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lower-river","repository":"africa","path":"gambia/lower-river","depth":2,"parent":"gambia","children":["soma"]});
export const childModules = Object.freeze({"soma":"./soma/soma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
