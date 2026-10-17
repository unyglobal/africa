// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manzini-region","repository":"africa","path":"eswatini/manzini-region","depth":2,"parent":"eswatini","children":["manzini"]});
export const childModules = Object.freeze({"manzini":"./manzini/manzini.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
