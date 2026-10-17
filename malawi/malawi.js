// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malawi","repository":"africa","path":"malawi","depth":1,"parent":"","children":["central-region","northern-region","southern-region"]});
export const childModules = Object.freeze({"central-region":"./central-region/central-region.js","northern-region":"./northern-region/northern-region.js","southern-region":"./southern-region/southern-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
