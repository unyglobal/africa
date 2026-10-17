// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"littoral","repository":"africa","path":"benin/littoral","depth":2,"parent":"benin","children":["cotonou"]});
export const childModules = Object.freeze({"cotonou":"./cotonou/cotonou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
