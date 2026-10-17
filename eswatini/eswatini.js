// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eswatini","repository":"africa","path":"eswatini","depth":1,"parent":"","children":["hhohho-region","manzini-region"]});
export const childModules = Object.freeze({"hhohho-region":"./hhohho-region/hhohho-region.js","manzini-region":"./manzini-region/manzini-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
